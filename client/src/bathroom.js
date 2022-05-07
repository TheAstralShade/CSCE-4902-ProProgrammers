import React, { Component } from 'react';
import './bathroom.css';
import DayComponent from './day';
import Header from "./component/Header";
import Axios from 'axios';
let items=[['Monday',0,0,false],['Tuesday',0,0,false],['Wednesday',0,0,false],['Thursday',0,0,false],['Friday',0,0,false],['Saturday',0,0,false],['Sunday',0,0,false]];
//let username = getUser();

class Bathroom extends Component {
  constructor(){
    super()
    this.state = {
      dayValue : 'Monday',
      wasteValue:'Solid',
      comment: '',
      updateValue:false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2=this.handleChange2.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }
  handleClick = () => {
    //console.log(this.state.wasteValue);
    //console.log(this.state.dayValue);

    items.map((item,index)=>{
      if (item[0] === this.state.dayValue)
      {
        if(this.state.wasteValue==='Solid'){item[1]++}
        else{item[2]++}
        //console.log(item[1])
        //console.log(item[2])
      }

  })
  this.setState({ updateValue: true });
  this.setState({ updateValue: false});
  }

  handleClick2 = () => {
    //let username = getUser()
    //console.log(username)
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
      totalSet: items[0][1] + items[1][1] + items[2][1] + items[3][1] + items[4][1] + items[5][1] + items[6][1] + items[0][2] + items[1][2] + items[2][2] + items[3][2] + items[4][2] + items[5][2] + items[6][2],
      user: localStorage.getItem("username")
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
      comments: this.state.comment,
      user: localStorage.getItem("username")
    })
    .then((response) => {
        console.log(response);
    });
  }

  handleClick3 = () => {
    //let username = getUser()
    //console.log(username)
    Axios.post("http://localhost:5000/get-bathroom", {
      user: localStorage.getItem("username")
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

  handleComment(e) {
    this.setState({ comment: e.target.value });
  }

  render(){
    return ( 
      <div>
        <Header />
        <div className="centered" > 
      <div id="LoginBox" className = "LoginCenter">
        <div className="TitleTest"> Data Entry </div>
        <hr className="Line"></hr>
        <div className = "spacer"> </div>
        <div className = "spacer"> </div>
        <div className="TypeTest"> Select Waste Type</div>
        <hr className="Line2"></hr>
        <div className="TypeTest"> 
        <select name="dog-names" className="TypeTest" onChange={this.handleChange2}>
          <option value="Solid">Solid</option>
          <option value="Liquid">Liquid</option>
        </select>
        </div>
        <div className = "spacer"> </div>
        <div className = "spacer"> </div>
        <div className="TypeTest"> Select Day </div>
        <hr className="Line2"></hr>
        <div className="TypeTest"> 
        <select name="dog-names" className="TypeTest" onChange={this.handleChange}>
          <option value="Monday" >Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        </div>
        <div className = "spacer"> </div>
        <div className = "spacer"> </div>
        <div className="TypeTest">Comment</div>
        <hr className="Line2"></hr>
        <input 
          className="CommentTest"
          value={this.state.comment}
          onChange={this.handleComment}
          />
        <div className = "spacer"> </div>
        <div className = "spacer"> </div>
        <div className="TypeTest">
        <button className="ButtonFormat2" onClick={this.handleClick}>Add Data</button>
        <button className="ButtonFormat2" onClick={this.handleClick2}>Save Data</button>
        <button className="ButtonFormat2" onClick={this.handleClick3}>Get Data</button>

        </div> 
      </div>
  
      
      <div id="LoginBox" className = "LoginCenter">
        <div className="TitleTest"> Recorded Data </div>
        <hr className="Line"></hr>
        <div className = "spacer"> </div>
            {items.map((item,index)=>{
              return (
                <div>
                  <div className = "spacer2"> </div>
                    <div id="chkBox">
                      <input id="check" type="checkbox" value="false" onClick={() => this.handleCheckClick(item[0])}></input>
                      <label for="check">Mark Important</label>
                    </div>
                    <DayComponent dayValue={item[0]} solidTimes={item[1]} liquidTimes={item[2]}/>

                </div>
              );
          })}
      </div>
    </div>
</div>
    
  
    )
  }
}

export default Bathroom;