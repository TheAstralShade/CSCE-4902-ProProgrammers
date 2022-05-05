import React, {Component } from "react";
import Header from "./component/Header";
import {Progress, Button, Checkbox} from 'semantic-ui-react';
import Axios from 'axios';
import './bathroomLog.css'


const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const types= ["Solid","Liquid"];
let items=[['Monday',0,0,false],['Tuesday',0,0,false],['Wednesday',0,0,false],['Thursday',0,0,false],['Friday',0,0,false],['Saturday',0,0,false],['Sunday',0,0,false]];

class bathroomLog extends Component {
  constructor(){
    super()
    this.state = {
      dayValue : 'Monday',
      wasteValue:'Solid',
      comment: '',
      updateValue:false
    }
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleTypeChange=this.handleTypeChange.bind(this);
    this.handleAddDataClick = this.handleAddDataClick.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }
  handleAddDataClick = (e) => {
    //console.log(this.state.wasteValue);
    //console.log(this.state.dayValue);
    e.preventDefault();

    items.map((item,index)=>{
      if (item[0] === this.state.dayValue) {
        if(this.state.wasteValue==='Solid'){item[1]++}
        else{item[2]++}
        //console.log(item[1])
        //console.log(item[2])
      }
    })
    this.setState({ updateValue: true });
    this.setState({ updateValue: false});
  }
  handleSaveClick = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/bathroom", {
      mondaySolidSet: items[0][1],
      tuesdaySolidSet: items[1][1],
      wednesdaySolidSet: items[2][1],
      thursdaySolidSet: items[3][1],
      fridaySolidSet: items[4][1],
      saturdaySolidSet: items[5][1],
      sundaySolidSet: items[6][1],
      mondayLiquidSet: items[0][2],
      tuesdayLiquidSet: items[1][2],
      wednesdayLiquidSet: items[2][2],
      thursdayLiquidSet: items[3][2],
      fridayLiquidSet: items[4][2],
      saturdayLiquidSet: items[5][2],
      sundayLiquidSet: items[6][2],
      totalSet: items[0][1] + items[1][1] + items[2][1] + items[3][1] + items[4][1] + items[5][1] + items[6][1] + items[0][2] + items[1][2] + items[2][2] + items[3][2] + items[4][2] + items[5][2] + items[6][2]
    }).then((response) => {
        console.log(response);
    });

    let tmp=[[...items[0]],[...items[1]],[...items[2]],[...items[3]],[...items[4]],[...items[5]],[...items[6]]]
    for(let i=0; i<7; i++) {
      if(!tmp[i][3]) {
        for(let j=0; j<4; j++) {
          tmp[i][j]=null;
        }
      }
    }
    Axios.post("http://localhost:5000/importantEntries", {
      tmp,
      comments: this.state.comment
    })
    .then((response) => {
        console.log(response);
    });
  }
  handleGetClick = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/get-bathroom", {
      babyName: 'Test'
    }).then((response) => {
      if(response.data.message) {
        console.log(response.data.message)
      }
      else {
        items[0][1] = response.data[0].Monday_Solid
        items[1][1] = response.data[0].Tuesday_Solid
        items[2][1] = response.data[0].Wednesday_Solid
        items[3][1] = response.data[0].Thursday_Solid
        items[4][1] = response.data[0].Friday_Solid
        items[5][1] = response.data[0].Saturday_Solid
        items[6][1] = response.data[0].Sunday_Solid
        items[0][2] = response.data[0].Monday_Liquid
        items[1][2] = response.data[0].Tuesday_Liquid
        items[2][2] = response.data[0].Wednesday_Liquid
        items[3][2] = response.data[0].Thursday_Liquid
        items[4][2] = response.data[0].Friday_Liquid
        items[5][2] = response.data[0].Saturday_Liquid
        items[6][2] = response.data[0].Sunday_Liquid
      }
  });
  this.setState({ updateValue: true });
  this.setState({ updateValue: false});
  }
  handleDayChange(e) {
    console.log(e.target.value);
    this.setState({ dayValue: e.target.value });
  }
  handleTypeChange(e) {
    console.log(e.target.value);
    this.setState({ wasteValue: e.target.value });
  }
  handleComment(e) {
    this.setState({ comment: e.target.value });
  }
  //finds the given day through a for loop and switches the boolean
  handleCheckClick(dayName) {
    for(var i =0; i < 7; i++) {
      if(items[i][0] === dayName) {
        items[i][3] ? items[i][3]=false : items[i][3]=true;
        console.log(items[i][3])
        break;
      }
    }
  }
  render(){
    return ( 
      <div className="container">
        <Header />
        <div className="ui placeholder segment">
          <div className="ui two column very relaxed stackable grid">
            
            <div className="column">
              <h1 className="field">Restroom Input</h1>
              <form className="ui form">
                <div className="field">
                  <label> Select a Type: </label>
                  <select name="day" onChange={this.handleTypeChange}>
                    {types.map((option, index) => {
                      return (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="field">
                <label> Select a Day: </label>
                  <select name="day" onChange={this.handleDayChange}>
                    {days.map((option, index) => {
                      return (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="field">
                  <label>Enter a Comment: </label>
                  <div className="ui input">
                    <input type="text" name="comments" value={this.state.comment} onChange={this.handleComment}/>
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <Button className="positive ui button" onClick={this.handleAddDataClick}>Add Data</Button>
                  <Button className="positive ui button" onClick={this.handleSaveClick}>Save Data</Button>
                  <Button className="positive ui button" onClick={this.handleGetClick}>Get Data</Button>
                </div>
              </form>
            </div>


            <div className="column" >
              {items.map((item, index) => {
                return (
                  <div sytle>
                      {item[0]}
                      <Checkbox style={{paddingLeft: 50}} id="chkBox" label={<label>Mark  as important</label>} onClick={() => this.handleCheckClick(item[0])}></Checkbox>
                    <Progress color='green' percent={5*item[1]}>Solid Entries: {item[1]}</Progress>
                    <Progress color='green' percent={5*item[2]}>Liquid Entries: {item[2]}</Progress>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default bathroomLog;