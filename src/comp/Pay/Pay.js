import React, { Component } from 'react';
import '../../App.css';
import PayButton from './PayButton';

class Pay extends Component {
     constructor(props){
        super(props);
        
         this.paySuccess = this.paySuccess.bind(this);
         
    }
    paySuccess(i){
        this.props.paySuccess(i);
    }
    
    //paypal api button
    
    render() {
        var comp = null;
        if(this.props.mJobBank.length !== 0){
           comp = (
            <div>
                <div className="margin">
                    <div className="title">PAYMENT</div>
                    <div className="red">{this.props.mJobBank[this.props.mIndex].money} CAD</div>
                    <div className="title">PAYMENT TO</div>
                    <div className="red">{this.props.mJobBank[this.props.mIndex].name}</div>
                    <hr/>
                    <br/>
                    <div>PAY WITH</div>
                    <PayButton 
                        amount={this.props.mJobBank[this.props.mIndex].money}
                        paySuccess={this.paySuccess}
                        
                        mIndex={this.props.mIndex}/>
                </div>
            </div>
        ) 
        }
        
        return (
            <div className="display">
               {comp}
            </div>
        );
    }
}

export default Pay;