import React, { Component } from 'react';
import './bathroom.css';
import DayComponent from './day';
import Header from "./component/Header";
import Axios from 'axios';
let items=[['Monday',0,0],['Tuesday',0,0],['Wednesday',0,0],['Thursday',0,0],['Friday',0,0],['Saturday',0,0],['Sunday',0,0]];

class Bathroom extends Component {
  constructor(){
    super()
    this.state = {
      dayValue : 'Monday',
      wasteValue:'Solid',
      updateValue:false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2=this.handleChange2.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    //console.log(this.state.wasteValue);
    //console.log(this.state.dayValue);

    items.map((item,index)=>{
      if (item[0] == this.state.dayValue)
      {
        if(this.state.wasteValue=='Solid'){item[1]++}
        else{item[2]++}
        //console.log(item[1])
        //console.log(item[2])
      }

  })
  this.setState({ updateValue: true });
  this.setState({ updateValue: false});
  }

  handleClick2 = () => {
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
  }

  handleClick3 = () => {
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

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ dayValue: e.target.value });
  }
  handleChange2(e) {
    console.log(e.target.value);
    this.setState({ wasteValue: e.target.value });
  }
  render(){
    return ( 
      <div>
        <Header />
        <div class="centered" > 
      <div id="LoginBox" class = "LoginCenter">
        <div class="TitleTest"> Data Entry </div>
        <hr class="Line"></hr>
        <div class = "spacer"> </div>
        <div class = "spacer"> </div>
        <div class="TypeTest"> Select Waste Type</div>
        <hr class="Line2"></hr>
        <div class="TypeTest"> 
        <select name="dog-names" class="TypeTest" onChange={this.handleChange2}>
          <option value="Solid">Solid</option>
          <option value="Liquid">Liquid</option>
        </select>
        </div>
        <div class = "spacer"> </div>
        <div class = "spacer"> </div>
        <div class = "spacer"> </div>
        <div class="TypeTest"> Select Day </div>
        <hr class="Line2"></hr>
        <div class="TypeTest"> 
        <select name="dog-names" class="TypeTest" onChange={this.handleChange}>
          <option value="Monday" >Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        </div>
        <div class = "spacer"> </div>
        <div class = "spacer"> </div>
        <div class="TypeTest"> 
        <button class="ButtonFormat2" onClick={this.handleClick}>Add Data</button>
        <button class="ButtonFormat2" onClick={this.handleClick2}>Save Data</button>
        <button class="ButtonFormat2" onClick={this.handleClick3}>Get Data</button>
        </div> 
      </div>
  

      <div id="LoginBox" class = "LoginCenter">
        <div class="TitleTest"> Recorded Data </div>
        <hr class="Line"></hr>
        <div class = "spacer"> </div>
        <div class = "spacer"> </div>
            {items.map((item,index)=>{
              return <DayComponent dayValue={item[0]} solidTimes={item[1]} liquidTimes={item[2]}/>
          })}
          
          
          
        
      </div>
    </div>
      </div>
    
  
    )
  }
}

export default Bathroom;