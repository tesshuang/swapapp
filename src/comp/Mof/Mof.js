import React, { Component } from 'react';
import '../../App.css';
import Pay from '../Pay/Pay.js';

class Fom extends Component {
 
  constructor(props){
      super(props);
      
      this.readIndex = this.readIndex.bind(this);
      
  }
   
  readIndex(i){
      this.props.findIndex(i);
      this.props.displayDP(true);
      console.log(this.props.mJobBank);
  }
    
  render() {
      
    var all = this.props.mJobBank.map((obj,index)=>{
        return(
            <div key={index}>
                <p>
                    <span className="jbresult">{obj.title}</span>
                    <span className="jbresult">{obj.money}</span>
                    <span className="jbresult">{obj.name}</span>
                    <button className="paybtn" onClick={this.readIndex.bind(this,index)}>PAY</button>
                    
                </p>
            </div>
        )
        
    })
    
    
    
    var mjb = null;
    if(this.props.mJobBank.length == 0){
        mjb=
            <div className="title">You have no track saved yet</div>
    }else{
        mjb=
            <div>
                {all}
                <hr/>
                <br/>
                <div>TOTAL: {this.props.total}</div>
            </div>
    }
    
    var comp = null;

        if(this.props.showInput == false){
        comp = 
       <div className="App">
        <div className="redbg">
             <br/><br/>
             <div className="title">FRIENDS I OWN</div>
             <br/>
             <div>
                <span className="jbhead"><b>FOR WHAT</b></span>
                <span className="jbhead"><b>MONEY</b></span>
                <span className="jbhead"><b>NAME</b></span>
             </div>
             {mjb}
             <br/><br/>
        </div>
        <div className="margin">
                <span>+</span>
                &nbsp;
                <span className="addnew" onClick={this.props.mshow}><b>ADD NEW</b></span>
        </div>
       </div>
    }else{
        comp=
      <div className="App">
        <div className="redbg">
            <br/><br/>
            <div className="title">FRIENDS I OWN</div>
            <br/>
            <div>
                <span className="jbhead"><b>FOR WHAT</b></span>
                <span className="jbhead"><b>MONEY</b></span>
                <span className="jbhead"><b>NAME</b></span>
            </div>
            {mjb}
            <br/><br/>
        </div>
        <div>
            <div className="margin">
                <span>+</span>
                &nbsp;
                <span className="addnew" onClick={this.props.mshow}><b>ADD NEW</b></span>
            </div>
            <div>
                <br/><br/>
                <input className="jbinput" onChange={this.props.inputChange1} type="text" placeholder="FOR WHAT"/>
                <input className="jbinput" onChange={this.props.inputChange2} type="text" placeholder="MONEY"/>
                <input className="jbinput" onChange={this.props.inputChange4} type="text" placeholder="NAME"/>
                <br/><br/>
                <button className="msubmit" onClick={this.props.pushItem}>SAVE</button>
                <br/>
                <button onClick={this.props.mhide} className="delet">× CANCLE</button>
                <br/><br/>
            </div>
        </div>
        
      </div>
    }
    
    
      
    return (
      <div className="display">
        {comp}
      </div>
    );
  }
}

export default Fom;