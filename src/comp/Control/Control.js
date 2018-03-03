import React, { Component } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../img/logo-white.png';
import { Container, Row, Col, Button} from 'reactstrap';

class Fom extends Component {
  constructor(props){
      super(props)     
  }
    
    render(){
        console.log(this.props.facetoggle);
        var comp = null;
        if(this.props.facetoggle === true){
            comp =(
                <div className="control margControl">
                    <img className="logoControl" src={logo}/>
                    <div className="dControl">
                    <div className="title">PROFILE</div>
                    <img className="avt" src={this.props.faceinfo.fbImg}/>
                    <br/><br/>
                    <div className="subtitle">{this.props.faceinfo.fbName}</div>
                    <div className="subtitle">{this.props.faceinfo.fbemail}</div>
                    <button className="btn3" onClick={this.props.logoutDisplay}>LOG OUT</button><br/>
                    <hr/>
                    <br/><br/>
                    <Button onClick={this.props.showfom} className="btn1">FRIENDS OWE ME</Button><br/>
                    <Button onClick={this.props.showmof} className="btn2">FRIENDS I OWE</Button><br/>
                    </div>
                </div>
            )
        } else if(this.props.gootoggle === true){
            comp =(
                    <div className="control margControl">
                        <img className="logoControl" src={logo}/>
                        <div className="dControl">
                        <div className="title">PROFILE</div>
                        <img className="avt" src={this.props.googleinfo.gooImg}/>
                        <br/><br/>
                        <div className="subtitle">{this.props.googleinfo.gooName}</div>
                        <div className="subtitle">{this.props.googleinfo.gooemail}</div>
                        <button  className="btn3" onClick={this.props.logoutDisplay}>LOG OUT</button><br/>
                        <hr/>
                        <br/><br/>
                        <button onClick={this.props.showfom} className="btn1">FRIENDS OWE ME</button><br/>
                        <button onClick={this.props.showmof} className="btn2">FRIENDS I OWE</button>
                    </div>
                </div>
            )

        }
        return (
            <div className="App">
                {comp}
            </div>
        );
        }
  }


export default Fom;