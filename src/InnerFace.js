import React, { Component } from 'react';
import Fom from './comp/Fom/Fom.js';
import Mof from './comp/Mof/Mof.js';
import Control from './comp/Control/Control.js';
import Pay from './comp/Pay/Pay.js';


class InnerFace extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            showFom:"true",
            displayPay:"false",
            
          mJobBank:[],
          titleInput:"",
          moneyInput:0,
          nameInput:"",
          showInput:false,
          total:0,
            
            mIndex:0
            
        }
        this.changeDisplay = this.changeDisplay.bind(this);
        this.showfom = this.showfom.bind(this);
        this.showmof = this.showmof.bind(this);
        
        this.displayDP = this.displayDP.bind(this);
        
      this.pushItem = this.pushItem.bind(this);
      this.sliceItem = this.sliceItem.bind(this);
      this.inputChange1 = this.inputChange1.bind(this);
      this.inputChange2 = this.inputChange2.bind(this);
      this.inputChange4 = this.inputChange4.bind(this);
      this.clickAdd = this.clickAdd.bind(this);
      this.mshow = this.mshow.bind(this);
      this.mhide = this.mhide.bind(this);
      this.handleChange = this.handleChange.bind(this);
        
        this.findIndex = this.findIndex.bind(this);
    }
    
    componentDidMount(){
        if(this.props.faceinfo.fbName.length !== 0){
            var fd = new FormData();

            fd.append("name", this.props.faceinfo.fbName);
            fd.append("image", this.props.faceinfo.fbImg);
            fd.append("email", this.props.faceinfo.fbemail);

            console.log(fd);
            fetch("http://tesshuangxj.com/swapapp/faceinsert.php", {
                method:"POST",
                body:fd
            })
        }
        
        
        if(this.props.googleinfo.gooName.length !== 0){
            var fd = new FormData();

            fd.append("name", this.props.googleinfo.gooName);
            fd.append("image", this.props.googleinfo.gooImg);
            fd.append("email", this.props.googleinfo.gooemail);

            console.log(fd);
            fetch("http://tesshuangxj.com/swapapp/googleinsert.php", {
                method:"POST",
                body:fd
            })
        }
    }
    
    findIndex(arg){
      this.setState({
          mIndex:arg
      })
  }
    
    changeDisplay(arg){
        var bool = arg;
        this.setState({
            showFom:bool
        })
    }
    
    showfom(){
        this.changeDisplay(true);
        this.displayDP(false)
    }

    showmof(){
        this.changeDisplay(false);
        this.displayDP(false)
    }
    
    displayDP(arg){
        var bool = arg;
        this.setState({
            displayPay:bool
        })
    }
    
    /*showPay(){
        this.changeDP(true)
    }*/

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
    
    render(){
        var comp = null;
        if(this.state.displayPay == true){
            comp = <div>
                     <Pay 
                        mJobBank={this.state.mJobBank}
                        mIndex={this.state.mIndex}
                        />
                   </div>
        }else if(this.state.showFom == true){
            comp = 
                <div>
                    <Fom />
                </div>
        }else{
            comp = 
                    <div>
                        <Mof
                            pushItem={this.pushItem}
                            sliceItem={this.sliceItem}
                            inputChange1={this.inputChange1}
                            inputChange2={this.inputChange2}
                            inputChange4={this.inputChange4}
                            clickAdd={this.clickAdd}
                            mshow={this.mshow}
                            mhide={this.mhide}
                            handleChange={this.handleChange}
                            mJobBank={this.state.mJobBank}
                            titleInput={this.state.titleInput}
                            moneyInput={this.state.moneyInput}
                            showInput={this.state.showInput}
                            total={this.state.total}

                            displayDP={this.displayDP}
                            displayPay={this.state.displayPay}
                            
                            
                            mIndex={this.state.mIndex}
                            findIndex={this.findIndex}

                        />
                    </div>
            }
        
        
        
        return (
          <div>
            <Control 
                   changeDisplay={this.changeDisplay}
                   showfom={this.showfom}
                   showmof={this.showmof}
                    faceinfo={this.props.faceinfo}
                    facetoggle={this.props.facetoggle}
                    googleinfo={this.props.googleinfo}
                    gootoggle={this.props.gootoggle}
                    />
            {comp}
          </div>
        );
    }
  }


export default InnerFace;