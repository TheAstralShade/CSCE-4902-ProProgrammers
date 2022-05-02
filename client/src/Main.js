import REACT, { Component } from 'react';
import REACTDOM from 'react-dom';
import MainCSS from './main.module.css';
import graph from './images/graph.png';
import {Tips} from './Tips.js';
import { Health } from './Gauge';
import diaper from './images/diaper.png';
import bottle from './images/bottle.png';
import sleep from './images/sleep.png';
import {gradeBath} from './review.js';
import {gradeSleep} from './review.js';
import {gradeEating} from './review.js';
import {summaryBath} from './summary.js';
import {summarySleep} from './summary.js';
import {summaryFood} from './summary.js';
import {ChildrenList} from './childrenList.js';
import  Modal  from './component/Modal';
import Axios from 'axios';
let total = 0;
let total2 = 0;     // This is the other total found in the eating table, Chandler
let test1 = 0;
let test2 = 0;
//let age = 1;

    Axios.post("http://localhost:5000/get-total", {
        }).then((response) => {
        if(response.data.message) {
            console.log(response.data.message)
        }
        else {
            let length = response.data.length;
            total = response.data[0].Total
            //total2 = response.data[value].Total
            test1 = response.data[1].Total
            test2 = response.data[length-1].Total
            //console.log(response.data[length-1].Total)
        }
        });
  //console.log(test1)

class Main extends Component{
    constructor(){
        super()
        this.state = {
            eatingTotal: total,
            sleepingTotal: test2,
            restroomTotal: test1,
            addChild: {
                name: "BABY 1",
                height: "3 ft",
                age: 5,
                weight:"20 lbs"
            },
            displayModal: false
        }
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    async componentDidMount() {
        const {data:{name, age, height, weight}} = await Axios.get("http://localhost:5000/babyDetails")
        this.setState({
            addChild: {
            name,height,weight, age
        }})
    }
    handleClick(e){}

    handleUpdate = () => {
         //window.location.reload(true);
         this.forceUpdate();
    }

    handleBath = () => {
        window.open("/bathroom")
    }

    handleSleep = () => {
        window.open("/sleeping")
    }

    handleEating = () => {
        window.open("/eating")
    }

    handleLogout = () => {
        window.open("/")
    }

    handleAppt = () => {
        window.open("/appointment")
    }

    handleAddChild = (e) => {
        e.preventDefault()
        Axios.post("http://localhost:5000/addBaby", 
        {
            name: e.target["name"].value,
            age:e.target["age"].value,
             height: e.target["height"].value,
              weight: e.target["weight"].value
        })
        this.setState({
            addChild: {
               name: e.target["name"].value,
            age:e.target["age"].value,
             height: e.target["height"].value,
              weight: e.target["weight"].value
        }})
        this.setState({displayModal: false})
       //  for (let i = 0; i < e.target; i++){
       //      console.log(e.target[i].value)
       //  }
    }
   handleModal = () => {
       this.setState({displayModal: true })
   }
 handleModalClosure = () => {
   window.open(`/home`);
 };
    render(){
        return(
            <body style={{marginTop: "0px", width: "100%", backgroundColor: "#03dbfc"}}>
                <h1 className={MainCSS.title}>BabyTracker</h1>
                <div className={MainCSS.navbar}>
                    <button className={MainCSS.nav} style={{marginLeft: "140px"}} onClick={this.handleBath}>Bath</button>
                    <button className={MainCSS.nav} onClick={this.handleSleep}>Sleep</button>
                    <button className={MainCSS.nav} onClick={this.handleEating}>Eating</button>
                    <button className={MainCSS.logout} onClick={this.handleLogout}>Log Out</button> 
                </div>
                <div style={{position: "relative", display: "flex", borderBottom: "2px solid grey", backgroundColor: "white", zIndex: "0", width: "100%" }}>
                    <div style={{width: "50%"}}>
                        <table>
                            <tr style={{display: "flex"}}>
                                <div style={{width: "400px"}}>
                                    <h1>Bath Overview</h1>
                                    <Health color="green" grade={gradeBath(test1, this.state.addChild.age)} src={diaper} status={graph}/>
                                </div>
                                <div>
                                    <h1>Summary</h1>
                                    <p>{summaryBath(test1, this.state.addChild.age)}</p>
                                </div>
                            </tr>
                            <tr style={{display: "flex"}}>
                                <div style={{width: "400px"}}>
                                    <h1>Sleeping Overview</h1>
                                    <Health color="green" grade={gradeSleep(test2, this.state.addChild.age)} src={sleep} status={graph}/>
                                </div>
                                <div>
                                    <h1>Summary</h1>
                                    <p>{summarySleep(test2, this.state.addChild.age)}</p>
                                </div>
                            </tr>
                            <tr style={{display: "flex"}}>
                                <div style={{width: "400px"}}>
                                    <h1>Eating Overview</h1>
                                    <Health color="green" grade={gradeEating(total, total2, this.state.addChild.age)} src={bottle} status={graph}/>
                                </div>
                                <div>
                                    <h1>Summary</h1>
                                    <p>{summaryFood(total, total2, this.state.addChild.age)}</p>
                                </div>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <div style={{display: "flex"}}>
                            <div style={{marginLeft: "100px"}}>
                                <h1 style={{fontSize: "23px"}}>Name: {this.state.addChild.name}</h1>
                                <h1 style={{fontSize: "23px"}}>Age: {this.state.addChild.age}</h1>
                                <h1 style={{fontSize: "23px"}}>Height: {this.state.addChild.height}</h1>
                                <h1 style={{fontSize: "23px"}}>Weight: {this.state.addChild.weight}</h1>
                                <button className={MainCSS.makeapp} onClick={this.handleAppt}>Make Appointment</button>
                            </div>
                        </div>
                        <div style={{display: "stack", marginTop: "30px", marginLeft: "30px"}}>
                                <button className={MainCSS.add} onClick={()=>{this.handleModal()}}> Update Child</button>

                                {this.state.displayModal ? <Modal
                                action={(e) => this.handleAddChild(e)}
          title="Delete Stream"
       handleClick={this.handleModalClosure}
    
        /> : null}
                        </div>
                        <div style={{display: "stack", marginTop: "30px", marginLeft: "30px"}}>
                                <button className={MainCSS.summary} onClick={this.handleUpdate}> Update Summary</button>
                        </div>
                        <div style={{marginTop: "100px"}}>
                            <Tips/>
                        </div>
                    </div>
                </div>
                <div style={{height: "60px", margin: "auto", backgroundColor: "white"}}>
                    <footer style={{textAlign: "center"}}>
                        Copyright <span>&copy;</span> 2021 Pro Programmers. All Rights Reserved.
                    </footer>
                </div>
            </body>
        );
    }
}

export default Main