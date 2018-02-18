import React, { Component } from 'react';

  window.fbAsyncInit = function() {
    window.FB.init({
      appId            : '1980946758783896',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.12'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

class Landing extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            fbName:"",
            fbImg:""
        }
        this.fbLogin = this.fbLogin.bind(this);
    }
    
    fbLogin(){
        console.log(window.FB);
        
        window.FB.login((resp)=>{
            console.log(resp);
            if(resp.status == "connected"){
                console.log("user connected successfully.");
                
                var token = resp.authResponse.accessToken;
                
                //fetch user's info
                fetch("https://graph.facebook.com/me?fields=name, age_range,picture.height(50)&access_token="+token).then((resp)=>{
                    return resp.json();
                }).then((json)=>{
                    console.log(json);
                    
                    this.setState({
                        fbName:json.name,
                        fbImg:json.picture.data.url
                    })
                })
                
            }
        })
    }
    
    render() {
        return (
          <div className="App">
            <button onClick={this.fbLogin}>Login with Facebook</button>
            <br/>
            Hi {this.state.fbName}
            <br />
            <img src={this.state.fbImg} />
            
          </div>
        );
    }
}

export default Landing;
