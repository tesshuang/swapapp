import React, { Component } from 'react';
import '../../App.css';


class Fom extends Component {
  constructor(props){
      super(props)
      
      this.state = {
          mJobBank:[],
          titleInput:"",
          moneyInput:"",
          nameInput:"",
          showInput:false,
      }
      
      this.pushItem = this.pushItem.bind(this);
      this.sliceItem = this.sliceItem.bind(this);
      this.inputChange1 = this.inputChange1.bind(this);
      this.inputChange2 = this.inputChange2.bind(this);
      this.inputChange4 = this.inputChange4.bind(this);
      this.clickAdd = this.clickAdd.bind(this);
      this.mshow = this.mshow.bind(this);
      this.mhide = this.mhide.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }
    
    
 handleChange(date) {
    this.setState({
      startDate: date
    });
  }

clickAdd(arg){
    var bool = arg;
    this.setState({
        showInput:bool
    })
}
    
mshow(){
    this.clickAdd(true)
}

mhide(){
    this.clickAdd(false)
}
    
inputChange1(evt){
    var iTitle = evt.target.value;
    this.setState({
        titleInput:iTitle
    })
}
    
inputChange2(evt){
    var iMoney = evt.target.value;
    this.setState({
        moneyInput:iMoney
    })
}
    
    
inputChange4(evt){
    var iName = evt.target.value;
    this.setState({
        nameInput:iName
    })
}
    
pushItem(){
    var temp = this.state.mJobBank;
    var mobj = {
        title:this.state.titleInput, 
        money:this.state.moneyInput,
        name:this.state.nameInput,
        link:this.state.linkInput};
    temp.push(mobj);
    
    this.setState({
        mJobBank:temp
    });
    
    console.log(temp);
}
    
    
  sliceItem(i){
      var temp = this.state.mJobBank;
      temp.splice(i,1);
      this.setState({
          mJobBank:temp
      })
  }
    
  render() {
    var all = this.state.mJobBank.map((obj,index)=>{
        return(
            <div key={index}>
                <p>
                    <span className="jbresult">{obj.title}</span>
                    <span className="jbresult">{obj.money}</span>
                    <span className="jbresult">{obj.name}</span>
                    <button className="paybtn" onClick={this.sliceItem.bind(this,index)}>PAID</button>
                </p>
            </div>
        )
    })
    
    var mjb = null;
    if(this.state.mJobBank.length == 0){
        mjb=
            <div className="title">You have no track saved yet</div>
    }else{
        mjb=
            <div>{all}</div>
    }
    
    var comp = null;
    if(this.state.showInput == false){
        comp = 
       <div className="App">
        <div className="bluebg">
             <br/><br/>
             <div className="title">FRIENDS OWN ME</div>
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
                <span className="addnew" onClick={this.mshow}><b>ADD NEW</b></span>
        </div>
       </div>
    }else{
        comp=
      <div className="App">
        <div className="bluebg">
            <br/><br/>
            <div className="title">FRIENDS OWN ME</div>
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
                <span className="addnew" onClick={this.mshow}><b>ADD NEW</b></span>
            </div>
            <div>
                <br/><br/>
                <input className="jbinput" onChange={this.inputChange1} type="text" placeholder="FOR WHAT"/>
                <input className="jbinput" onChange={this.inputChange2} type="text" placeholder="MONEY"/>
                <input className="jbinput" onChange={this.inputChange4} type="text" placeholder="NAME"/>
                <br/><br/>
                <button className="msubmit" onClick={this.pushItem}>SAVE</button>
                <br/>
                <button onClick={this.mhide} className="delet">× CANCLE</button>
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