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
import {ChildrenList} from './childrenList.js';

export class Main extends Component{
    handleClick(e){}

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
    
    render(){

        return(
            <body style={{marginTop: "0px", width: "100%", backgroundColor: "#03dbfc"}}>
                <h1 className={MainCSS.title}>BabyTracker</h1>
                <div className={MainCSS.navbar}>
                    <ChildrenList/>
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
                                    <Health color="green" grade={gradeBath()} src={diaper} status={graph}/>
                                </div>
                                <div>
                                    <h1>Summary</h1>
                                    <p>Text for Summary</p>
                                </div>
                            </tr>
                            <tr style={{display: "flex"}}>
                                <div style={{width: "400px"}}>
                                    <h1>Sleeping Overview</h1>
                                    <Health color="green" grade={gradeSleep()} src={sleep} status={graph}/>
                                </div>
                                <div>
                                    <h1>Summary</h1>
                                    <p>Text for Summary</p>
                                </div>
                            </tr>
                            <tr style={{display: "flex"}}>
                                <div style={{width: "400px"}}>
                                    <h1>Eating Overview</h1>
                                    <Health color="green" grade={gradeEating()} src={bottle} status={graph}/>
                                </div>
                                <div>
                                    <h1>Summary</h1>
                                    <p>Text for Summary</p>
                                </div>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <div style={{display: "flex"}}>
                            <div style={{marginLeft: "100px"}}>
                                <h1 style={{fontSize: "23px"}}>Name: namevalue</h1>
                                <h1 style={{fontSize: "23px"}}>Age: agevalue</h1>
                                <h1 style={{fontSize: "23px"}}>Height: heightvalue</h1>
                                <h1 style={{fontSize: "23px"}}>Weight: weightvalue</h1>
                                <button className={MainCSS.makeapp}onClick={this.handleAppt}>Make Appointment</button>
                                
                            </div>
                        </div>
                        <div style={{display: "stack", marginTop: "30px", marginLeft: "30px"}}>
                                <button className={MainCSS.add}> + Add Child</button>
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