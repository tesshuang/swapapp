import React, { Component } from 'react';
import '../../App.css';
import PayButton from './PayButton';

class Pay extends Component {
    
    //paypal api button
    
    render() {
        return (
            <div className="display">
                <div className="margin">
                    <div className="title">PAYMENT</div>
                    <div className="red">{this.props.mJobBank[this.props.mIndex].money} CAD</div>
                    <div className="title">PAYMENT TO</div>
                    <div className="red">{this.props.mJobBank[this.props.mIndex].name}</div>
                    <hr/>
                    <br/>
                    <div>PAY WITH</div>
                    <PayButton amount={this.props.mJobBank[this.props.mIndex].money}/>
                </div>
            </div>
        );
    }
}

export default Pay;