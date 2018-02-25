import React, { Component } from 'react';
import img1 from './img/img1.jpg';
import logo from './img/logo.png';

class Login extends Component {
    
    constructor(props){
        super(props);
    }

    
  render() {
      
    return (
       <div >               
        <div className="App">
             <div className="heroimg"></div>
             <div className="login">
               <div className="margin2">
                  <img className="logo" src={logo}/>
        
                  <div className="slogan">An Easy Way to <br/>Track Your Debt</div>
                  <br/><br/><br/><br/>
                  <button className="googlebtn" onClick={() => this.props.googleLogin() }>Login with Google</button>
                  <button className="facebookbtn" onClick={this.props.fbLogin}>Login with Facebook</button>
               </div>
               
             </div>
          </div>
  </div>  
    );
  }
}

export default Login;
