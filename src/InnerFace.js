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
            
                mJobBank2:[],
                titleInput2:"",
                moneyInput2:0,
                nameInput2:"",
                
                showInput:false,
                total:0,
                mIndex:0
            
        }
        this.changeDisplay = this.changeDisplay.bind(this);
        this.showfom = this.showfom.bind(this);
        this.showmof = this.showmof.bind(this);

        this.displayDP = this.displayDP.bind(this);

        this.pushItemB = this.pushItemB.bind(this);
        this.pushItemL = this.pushItemL.bind(this);
        /*this.sliceItem = this.sliceItem.bind(this);*/
        this.inputChange1 = this.inputChange1.bind(this);
        this.inputChange2 = this.inputChange2.bind(this);
        this.inputChange3 = this.inputChange3.bind(this);
        this.inputChange4 = this.inputChange4.bind(this);
        this.inputChange5 = this.inputChange5.bind(this);
        this.inputChange6 = this.inputChange6.bind(this);
        this.clickAdd = this.clickAdd.bind(this);
        this.mshow = this.mshow.bind(this);
        this.mhide = this.mhide.bind(this);
        

        this.findIndex = this.findIndex.bind(this);
        this.logoutDisplay = this.logoutDisplay.bind(this);
        
    }
    
    componentDidMount(){
        if(this.props.faceinfo.fbName.length !== 0){
            var fd = new FormData();

            fd.append("name", this.props.faceinfo.fbName);
            fd.append("image", this.props.faceinfo.fbImg);
            fd.append("email", this.props.faceinfo.fbemail);

            fetch("http://tesshuangxj.com/swapapp/faceinsert.php", {
                method:"POST",
                body:fd
            });
            
/*            fetch("http://tesshuangxj.com/swapapp/session.php",{
                method:"GET"
            })*/
        }
        
        
        if(this.props.googleinfo.gooName.length !== 0){
            var fd = new FormData();

            fd.append("name", this.props.googleinfo.gooName);
            fd.append("image", this.props.googleinfo.gooImg);
            fd.append("email", this.props.googleinfo.gooemail);

          
            fetch("http://tesshuangxj.com/swapapp/googleinsert2.php", {
                method:"POST",
                body:fd
            });
            
/*            fetch("http://tesshuangxj.com/swapapp/session.php",{
                method:"GET"
            }).then((resp)=>{
                return resp.text();
            }).then((text)=>{
                console.log(text);
            });*/
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


        inputChange3(evt){
            var iName = evt.target.value;
            this.setState({
                nameInput:iName
            })
        }

        inputChange4(evt){
            this.setState({
                titleInput2:evt.target.value
            })
        }

        inputChange5(evt){
            this.setState({
                moneyInput2:evt.target.value
            })
        }


        inputChange6(evt){
            this.setState({
                nameInput2:evt.target.value
            })
        }    

        pushItemB(){
            var temp = this.state.mJobBank;
            var mobj = {
                reason:this.state.titleInput, 
                money:this.state.moneyInput,
                name:this.state.nameInput};
            temp.push(mobj);

            this.setState({
                mJobBank:temp  
            });

            var fd = new FormData();

            fd.append("name", mobj.name);
            fd.append("amount", mobj.money);
            fd.append("reason", mobj.reason);


            fetch("http://tesshuangxj.com/swapapp/usrborrow.php", {
                method:"POST",
                body:fd,
                credentials:"same-origin"

            });

            console.log(temp);
        }


        pushItemL(){
            var temp = this.state.mJobBank2;
            var mobj = {
                reason:this.state.titleInput2, 
                money:this.state.moneyInput2,
                name:this.state.nameInput2};
            temp.push(mobj);

            this.setState({
                mJobBank2:temp  
            });

            /*var fd = new FormData();

            fd.append("name", mobj.name);
            fd.append("amount", mobj.money);
            fd.append("reason", mobj.reason);


            fetch("http://tesshuangxj.com/swapapp/usrborrow.php", {
                method:"POST",
                body:fd,
                credentials:"same-origin"

            });*/

            console.log(temp);
        }

        logoutDisplay(){
            this.props.logoutDisplay();
            this.props.userLogout();
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
                    <Fom 
                        inputChange4={this.inputChange4}
                        inputChange5={this.inputChange5}
                        inputChange6={this.inputChange6}
                        mshow={this.mshow}
                        mhide={this.mhide}
                        showInput={this.state.showInput}
                        displayDP={this.displayDP}
                        findIndex={this.findIndex}
                        total={this.state.total}
                        mJobBank2={this.state.mJobBank2}
                        pushItemL={this.pushItemL}/>
                </div>
        }else{
            comp = 
                    <div>
                        <Mof
                            pushItemB={this.pushItemB}
                            inputChange1={this.inputChange1}
                            inputChange2={this.inputChange2}
                            inputChange3={this.inputChange3}
                            clickAdd={this.clickAdd}
                            mshow={this.mshow}
                            mhide={this.mhide}
                            mJobBank={this.state.mJobBank}
                            
                            showInput={this.state.showInput}
                            total={this.state.total}

                            displayDP={this.displayDP}
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
                    logoutDisplay={this.logoutDisplay}
                    
                    />
            {comp}
          </div>
        );
    }
  }


export default InnerFace;