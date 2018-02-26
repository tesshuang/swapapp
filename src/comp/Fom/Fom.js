import React, { Component } from 'react';
import '../../App.css';


class Fom extends Component {
   constructor(props){
      super(props);
      
      
  }
 
    
 
    

    
    
    //delete user info in the database
    

    
  render() {
    var all = this.props.mJobBank2.map((obj,index)=>{
        return(
            <div key={index}>
                <p>
                    <span className="jbresult">{obj.reason}</span>
                    <span className="jbresult">{obj.money}</span>
                    <span className="jbresult">{obj.name}</span>
                    <button className="paybtn" onClick={this.props.sliceItem.bind(this,index)}>PAID</button>
                </p>
            </div>
        )
    })
    
    var mjb = null;
    if(this.props.mJobBank2.length == 0){
        mjb=
            <div className="title">You have no track saved yet</div>
    }else{
        mjb=
            <div>{all}</div>
    }
    
    var comp = null;
    
        if(this.props.showInput === false){
        comp = 
        <div className="App">
        <div className="bluebg">
             <br/><br/>
             <div className="title">FRIENDS OWE ME</div>
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
                <span className="addnew">+</span>
                &nbsp;
                <span className="addnew" onClick={this.props.mshow}><b>ADD NEW</b></span>
        </div>
       </div>
    }else if(this.props.showInput === true){
        if(this.props.showPop === false){
            comp=
      <div className="App">
        <div className="bluebg">
            <br/><br/>
            <div className="title">FRIENDS OWE ME</div>
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
                <span className="addnew">+</span>
                &nbsp;
                <span className="addnew" onClick={this.props.mshow}><b>ADD NEW</b></span>
            </div>
            <div>
                <br/><br/>
                <input className="jbinput" onChange={this.props.inputChange4} type="text" placeholder="FOR WHAT"/>
                <input className="jbinput" onChange={this.props.inputChange5} type="text" placeholder="MONEY"/>
                <input className="jbinput" onChange={this.props.inputChange6} type="text" placeholder="NAME"/>
                <br/><br/>
                <button className="msubmit" onClick={this.props.pushItemL}>SAVE</button>
                <br/>
                <button onClick={this.props.mhide} className="delet">× CANCEL</button>
                <br/><br/>
            </div>
        </div>
        
      </div>
           }else {
               comp=
      <div className="App">
        <div className='popup'>
            <div className='popup_inner'>
              <p className="title">The record has been deleted</p>
              <button className="btn3" onClick={this.props.hidePop}>COOL</button>
            </div>
        </div>
        <div className="bluebg">
            <br/><br/>
            <div className="title">FRIENDS OWE ME</div>
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
                <span className="addnew">+</span>
                &nbsp;
                <span className="addnew" onClick={this.props.mshow}><b>ADD NEW</b></span>
            </div>
            <div>
                <br/><br/>
                <input className="jbinput" onChange={this.props.inputChange4} type="text" placeholder="FOR WHAT"/>
                <input className="jbinput" onChange={this.props.inputChange5} type="text" placeholder="MONEY"/>
                <input className="jbinput" onChange={this.props.inputChange6} type="text" placeholder="NAME"/>
                <br/><br/>
                <button className="msubmit" onClick={this.props.pushItemL}>SAVE</button>
                <br/>
                <button onClick={this.props.mhide} className="delet">× CANCEL</button>
                <br/><br/>
            </div>
        </div>
        
      </div>
           }
        
        }
    
    
      
    return (
      <div className="display">
        {comp}
      </div>
    );
  }
}

export default Fom;