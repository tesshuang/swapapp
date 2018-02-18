import React, { Component } from 'react';
import './App.css';
import InnerFace from './InnerFace';
import Login from './Login';


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

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            faceinfo:{
                fbName:"",
                fbImg:"",
                fbemail:""
            },
            facetoggle:false,
            googleinfo:{
               gooName:"",
                gooImg:"",
                gooemail:"" 
            },
            gootoggle:false,
            viewtoggle:false
        }
        this.fbLogin = this.fbLogin.bind(this);
        
    }
    
    componentDidMount(){
        (function() {
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.async = true;
            e.src = "https://apis.google.com/js/client:platform.js?onload=gPOnLoad";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        })();    
    }
    

    
    googleLogin = () => {
        let response = null;
        window.gapi.auth.signIn({
            callback: function(authResponse) {
                this.googleSignInCallback( authResponse )
            }.bind( this ),
            clientid: '68800551269-9081kqch88djr69durrj132u16kvo6kc.apps.googleusercontent.com', //Google client Id
            cookiepolicy: "single_host_origin",
            requestvisibleactions: "http://schema.org/AddAction",
            scope: "https://www.googleapis.com/auth/plus.login email"
        });
        
    }
    
    googleSignInCallback = (e) => {
        console.log( e.id )
        if (e["status"]["signed_in"]) {
            window.gapi.client.load("plus", "v1", function() {
                if (e["access_token"]) {
                    this.getUserGoogleProfile( e["access_token"] )
                } else if (e["error"]) {
                    console.log('Import error', 'Error occured while importing data')
                }
            }.bind(this));
        } else {
            console.log('Oops... Error occured while importing data')
        }
    }

    getUserGoogleProfile = accesstoken => {
        var e = window.gapi.client.plus.people.get({
            userId: "me"
        });
        e.execute(function(e) {
            if (e.error) {
                console.log(e.message);
                console.log('Import error - Error occured while importing data')
                return
            
            } else if (e.id) {
                //Profile data
                /*alert("Successfull login from google : "+ e.displayName )*/
                this.setState({
                    googleinfo:{
                       gooName:e.displayName,
                        gooImg:e.image.url,
                        gooemail:e.emails[0].value
                    },
                    gootoggle:true,
                    viewtoggle:true
                })
                console.log( e );
                return;
            }
        }.bind(this));
    }
    
    fbLogin(){
        console.log(window.FB);
        
        window.FB.login((resp)=>{
            console.log(resp);
            if(resp.status == "connected"){
                console.log("user connected successfully.");
                
                var token = resp.authResponse.accessToken;
                
                //fetch user's info
                fetch("https://graph.facebook.com/me?fields=name, age_range,picture.height(100),email&access_token="+token).then((resp)=>{
                    return resp.json();
                }).then((json)=>{
                    console.log(json);
                    
                    this.setState({
                        faceinfo:{
                            fbName:json.name,
                            fbImg:json.picture.data.url,
                            fbemail:json.email
                        },
                        facetoggle: true,
                        viewtoggle:true
                    })
                    
                })
                
            }
        })
    }

    render() {
        console.log("Hi",this.state.googleinfo.gooName.length)
        console.log(this.state.faceinfo.fbName,this.state.gooImg, this.state.gooemail);
        var comp =null;
        if(this.state.viewtoggle ===  false){
            comp = (
                <Login 
                    fbLogin={this.fbLogin}
                    googleLogin={this.googleLogin}/>
            )
            
        }
        else{
            comp =(
                <InnerFace 
                    faceinfo={this.state.faceinfo}
                    facetoggle={this.state.facetoggle}
                    googleinfo={this.state.googleinfo}
                    gootoggle={this.state.gootoggle}
                    />
            )
            
        }
        return (
          <div>
            {comp}
          </div>
        );
    }
}

export default App;
