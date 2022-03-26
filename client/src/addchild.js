import REACT, { Component } from 'react';
import REACTDOM from 'react-dom';
import MainCSS from './main.module.css';


export class AddChild extends Component{
    render(){
        return(
            <div>
                <h1 className={MainCSS.title}>New Child</h1>
                <div style={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                    <form style={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                        <label for="fname" style={{marginRight: "30px"}}>Name</label>
                        <input type="text" id="fname" name="fname"/>

                        <h1 style={{color: "white", textAlign: "center"}}>Date of Birth</h1>
                        <form style={{display: "flex", marginRight: "300px"}}>
                            <label for="year" style={{marginLeft: "0px", marginRight: "10px"}}>Year</label>
                            <input type="number" id="year" name="year" style={{marginRight: "30px"}}/>
                            <br/>
                            <br/>
                            <label for="month" style={{marginRight: "10px"}}>Month</label>
                            <input type="number" id="month" name="month" style={{marginRight: "30px"}}/>
                            <br/>
                            <br/>
                            <label for="day" style={{marginRight: "10px"}}>Day</label>
                            <input type="number" id="day" name="day"/>
                        </form>

                        <label for="height" style={{marginRight: "32px"}}>Hieght</label>
                        <input type="number" id="height" name="height"/>
                        <br/>
                        <br/>
                        <label for="weight" style={{marginRight: "30px"}}>Wieght</label>
                        <input type="number" id="weight" name="weight"/>
                        <br/>
                        <br/>
                        <input className="submit" style={
                            {
                                borderRadius: "10px", color: "#03dbfc", backgroundColor:
                            "white", borderWidth: "0px", height: "60px", width: "200px",
                                marginRight: "20px"}
                            } 
                            type="submit" value="Add New Child" />
                        <button className="cancel" style={{borderRadius: "10px", color: "red", backgroundColor:
                            "white", borderWidth: "0px", height: "60px", width: "200px",
                           }} 
                            >Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
}