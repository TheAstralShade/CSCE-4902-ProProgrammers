import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import {NavBar} from './NavBar.js';
import Header from "./component/Header";
import './eating.css';
import Axios from 'axios';
 
class Feeding extends Component{
  constructor(){
    super()
    this.state = {
      ounces: 0,
      minutes: 0,
      bottleDay: '',
      breastDay: '',
      bottleEntry1: ['No Date',0],
      bottleEntry2: ['No Date',0],
      bottleEntry3: ['No Date',0],
      bottleEntry4: ['No Date',0],
      bottleEntry5: ['No Date',0],
      bottleEntry6: ['No Date',0],
      bottleEntry7: ['No Date',0],
      breastEntry1: ['No Date',0],
      breastEntry2: ['No Date',0],
      breastEntry3: ['No Date',0],
      breastEntry4: ['No Date',0],
      breastEntry5: ['No Date',0],
      breastEntry6: ['No Date',0],
      breastEntry7: ['No Date',0],
      bottleMarker: 0,
      breastMarker: 0,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick5 = this.handleClick5.bind(this);
    this.handleClick6 = this.handleClick6.bind(this);
  }

  handleClick(){
    //console.log(this.state.ounces);

    switch(this.state.bottleMarker) {
      case 0:
        this.state.bottleEntry1[0] = this.state.bottleDay
        this.state.bottleEntry1[1]= this.state.ounces
      break;
      case 1:
        this.state.bottleEntry2[0] = this.state.bottleDay
        this.state.bottleEntry2[1]= this.state.ounces
      break;
      case 2:
        this.state.bottleEntry3[0] = this.state.bottleDay
        this.state.bottleEntry3[1]= this.state.ounces
      break;
      case 3:
        this.state.bottleEntry4[0] = this.state.bottleDay
        this.state.bottleEntry4[1]= this.state.ounces
      break;
      case 4:
        this.state.bottleEntry5[0] = this.state.bottleDay
        this.state.bottleEntry5[1]= this.state.ounces
      break;
      case 5:
        this.state.bottleEntry6[0] = this.state.bottleDay
        this.state.bottleEntry6[1]= this.state.ounces
      break;
      case 6:
        this.state.bottleEntry7[0] = this.state.bottleDay
        this.state.bottleEntry7[1]= this.state.ounces
      break;
    }

    if(this.state.bottleMarker == 6)
      this.state.bottleMarker = 0
    else
      this.state.bottleMarker++
  }

  handleClick2(){
    //console.log(this.state.ounces);

    switch(this.state.breastMarker) {
      case 0:
        this.state.breastEntry1[0] = this.state.breastDay
        this.state.breastEntry1[1]= this.state.minutes
      break;
      case 1:
        this.state.breastEntry2[0] = this.state.breastDay
        this.state.breastEntry2[1]= this.state.minutes
      break;
      case 2:
        this.state.breastEntry3[0] = this.state.breastDay
        this.state.breastEntry3[1]= this.state.minutes
      break;
      case 3:
        this.state.breastEntry4[0] = this.state.breastDay
        this.state.breastEntry4[1]= this.state.minutes
      break;
      case 4:
        this.state.breastEntry5[0] = this.state.breastDay
        this.state.breastEntry5[1]= this.state.minutes
      break;
      case 5:
        this.state.breastEntry6[0] = this.state.breastDay
        this.state.breastEntry6[1]= this.state.minutes
      break;
      case 6:
        this.state.breastEntry7[0] = this.state.breastDay
        this.state.breastEntry7[1]= this.state.minutes
      break;
    }

    if(this.state.breastMarker == 6)
      this.state.breastMarker = 0
    else
      this.state.breastMarker++
  }

  handleClick3 = () => {
    Axios.post("http://localhost:5000/eating-bottle", {
      // Work the server responses Chandler. 
      // Use the this.state.bottleEntry states
      date1: this.state.bottleEntry1[0],
      date2: this.state.bottleEntry2[0],
      date3: this.state.bottleEntry3[0],
      date4: this.state.bottleEntry4[0],
      date5: this.state.bottleEntry5[0],
      date6: this.state.bottleEntry6[0],
      date7: this.state.bottleEntry7[0],
      amount1: this.state.bottleEntry1[1],
      amount2: this.state.bottleEntry2[1],
      amount3: this.state.bottleEntry3[1],
      amount4: this.state.bottleEntry4[1],
      amount5: this.state.bottleEntry5[1],
      amount6: this.state.bottleEntry6[1],
      amount7: this.state.bottleEntry7[1],
      total: this.state.bottleEntry1[1] + this.state.bottleEntry2[1] + this.state.bottleEntry3[1] + this.state.bottleEntry4[1] + this.state.bottleEntry5[1] + this.state.bottleEntry6[1] + this.state.bottleEntry7[1]
    }).then((response) => {
        console.log(response);
  });
  }

  handleClick4 = () => {
    Axios.post("http://localhost:5000/get-eating-bottle", {
      babyName: 'Test'
    }).then((response) => {
      if(response.data.message) {
        console.log(response.data.message)
      }
      else {
        this.state.bottleEntry1[0] = response.data[0].Date1
        this.state.bottleEntry2[0] = response.data[0].Date2
        this.state.bottleEntry3[0] = response.data[0].Date3
        this.state.bottleEntry4[0] = response.data[0].Date4
        this.state.bottleEntry5[0] = response.data[0].Date5
        this.state.bottleEntry6[0] = response.data[0].Date6
        this.state.bottleEntry7[0] = response.data[0].Date7
        this.state.bottleEntry1[1] = response.data[0].Amount1
        this.state.bottleEntry2[1] = response.data[0].Amount2
        this.state.bottleEntry3[1] = response.data[0].Amount3
        this.state.bottleEntry4[1] = response.data[0].Amount4
        this.state.bottleEntry5[1] = response.data[0].Amount5
        this.state.bottleEntry6[1] = response.data[0].Amount6
        this.state.bottleEntry7[1] = response.data[0].Amount7
      }
  });
  }

  handleClick5 = () => {
    Axios.post("http://localhost:5000/eating-breast", {
      date1: this.state.breastEntry1[0],
      date2: this.state.breastEntry2[0],
      date3: this.state.breastEntry3[0],
      date4: this.state.breastEntry4[0],
      date5: this.state.breastEntry5[0],
      date6: this.state.breastEntry6[0],
      date7: this.state.breastEntry7[0],
      time1: this.state.breastEntry1[1],
      time2: this.state.breastEntry2[1],
      time3: this.state.breastEntry3[1],
      time4: this.state.breastEntry4[1],
      time5: this.state.breastEntry5[1],
      time6: this.state.breastEntry6[1],
      time7: this.state.breastEntry7[1],
    }).then((response) => {
        console.log(response);
  });
  }

  handleClick6 = () => {
    Axios.post("http://localhost:5000/get-eating-breast", {
      babyName: 'Test'
    }).then((response) => {
      if(response.data.message) {
        console.log(response.data.message)
      }
      else {
        this.state.breastEntry1[0] = response.data[0].Date1
        this.state.breastEntry2[0] = response.data[0].Date2
        this.state.breastEntry3[0] = response.data[0].Date3
        this.state.breastEntry4[0] = response.data[0].Date4
        this.state.breastEntry5[0] = response.data[0].Date5
        this.state.breastEntry6[0] = response.data[0].Date6
        this.state.breastEntry7[0] = response.data[0].Date7
        this.state.breastEntry1[1] = response.data[0].Time1
        this.state.breastEntry2[1] = response.data[0].Time2
        this.state.breastEntry3[1] = response.data[0].Time3
        this.state.breastEntry4[1] = response.data[0].Time4
        this.state.breastEntry5[1] = response.data[0].Time5
        this.state.breastEntry6[1] = response.data[0].Time6
        this.state.breastEntry7[1] = response.data[0].Time7
      }
  });
  }

  handleOunceChange = (e) => {
    this.setState({ ounces: e.target.value})
  }

  handleMinutesChange = (e) => {
    this.setState({ minutes: e.target.value})
  }
  
  handleBottleDayChange = (e) => {
    this.setState({ bottleDay: e.target.value})
  }

  handleBreastDayChange = (e) => {
    this.setState({ breastDay: e.target.value})
  }

  render(){
    return (
      <div>
        <Header />
        <div className="Bottle Box">
          <h2>Bottle Entries</h2>
          <div className="inputs">
            <label>Ounces: </label>
            <input 
              type="number" 
              name="ounces"
              value={this.state.ounces}
              onChange={this.handleOunceChange}
            />
            <br></br>
            <br></br>
            <label>Day:</label>
            <input 
              type="text" 
              name="day"
              value={this.state.bottleDay} 
              onChange={this.handleBottleDayChange}
            />
            <br></br>
            <br></br>
            <button onClick={this.handleClick}>Record</button>
            <button onClick={this.handleClick3}>Save</button>
            <button onClick={this.handleClick4}>Load</button>
          </div>
        </div>
        <div className="Week Box">
          <h2>Bottle Records</h2>
          <h3>{this.state.bottleEntry1[0]} : {this.state.bottleEntry1[1]} Ounces</h3>
          <h3>{this.state.bottleEntry2[0]} : {this.state.bottleEntry2[1]} Ounces</h3>
          <h3>{this.state.bottleEntry3[0]} : {this.state.bottleEntry3[1]} Ounces</h3>
          <h3>{this.state.bottleEntry4[0]} : {this.state.bottleEntry4[1]} Ounces</h3>
          <h3>{this.state.bottleEntry5[0]} : {this.state.bottleEntry5[1]} Ounces</h3>
          <h3>{this.state.bottleEntry6[0]} : {this.state.bottleEntry6[1]} Ounces</h3>
          <h3>{this.state.bottleEntry7[0]} : {this.state.bottleEntry7[1]} Ounces</h3>
        </div>
        <div className="Breastfeed Box">
          <h2>Breastfeeding Entry</h2>
          <div className="inputs">
            <label>Minutes: </label>
            <input 
              type="number" 
              name="minutes"
              value={this.state.minutes}
              onChange={this.handleMinutesChange}
            />
            <br></br>
            <br></br>
            <label>Day:</label>
            <input 
              type="text" 
              name="day"
              value={this.state.breastDay} 
              onChange={this.handleBreastDayChange}
            />
            <br></br>
            <br></br>
            <button onClick={this.handleClick2}>Record</button>
            <button onClick={this.handleClick5}>Save</button>
            <button onClick={this.handleClick6}>Load</button>
          </div>
        </div>
        <div className="Day Box">
          <h2>Breastfed Records</h2>
          <h3>{this.state.breastEntry1[0]} : {this.state.breastEntry1[1]} Minutes</h3>
          <h3>{this.state.breastEntry2[0]} : {this.state.breastEntry2[1]} Minutes</h3>
          <h3>{this.state.breastEntry3[0]} : {this.state.breastEntry3[1]} Minutes</h3>
          <h3>{this.state.breastEntry4[0]} : {this.state.breastEntry4[1]} Minutes</h3>
          <h3>{this.state.breastEntry5[0]} : {this.state.breastEntry5[1]} Minutes</h3>
          <h3>{this.state.breastEntry6[0]} : {this.state.breastEntry6[1]} Minutes</h3>
          <h3>{this.state.breastEntry7[0]} : {this.state.breastEntry7[1]} Minutes</h3>
        </div>
      </div>
    );
  }
}

export default Feeding;