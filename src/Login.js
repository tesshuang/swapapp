import React, { Component } from 'react';
import logo from './img/logo.png';
import logo2 from './img/logo-white.png';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col} from 'reactstrap';
import { Navbar, NavbarBrand, Nav } from 'reactstrap';

class Login extends Component {
    
    constructor(props){
        super(props);
    }

    
  render() {
      
    return (             
            <Container className="MainContainer App">
            <Navbar className="navColor">
              <NavbarBrand className="mr-auto"><img  className="logoNav" src={logo2}/></NavbarBrand>
            </Navbar>
              <Row className="rowLogin">                   
                  <Col sm={3} className="heroimg"></Col>
                  <Col sm={9} className="login">
                    <div className="paddLogin padTop">
                        <img className="logo" src={logo}/>
                        <h1 className="slogan">An Easy Way to track Your Debt</h1>
                        <br/><br/><br/><br/>
                        <button className="googlebtn" onClick={() => this.props.googleLogin() }>Login with Google</button>
                        <button className="facebookbtn" onClick={this.props.fbLogin}>Login with Facebook</button>
                    </div>
                  </Col>
              </Row> 
          </Container>   
    );
  }
}

export default Login;
