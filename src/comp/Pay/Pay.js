import React, { Component } from 'react';
import '../../App.css';


class Pay extends Component {
    
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
            <button>PayPal</button>
        </div>
      </div>
    );
  }
}

export default Pay;