import React, { Component } from 'react';
import Header from "./component/Header";
import {Form, Input, Dropdown, Button, Grid, Container, Checkbox, Segment} from "semantic-ui-react";
import Axios from 'axios';
let importantbottle = [false, false, false, false, false, false, false]
let importantbreast = [false, false, false, false, false, false, false]
const days = [
  {
    key: "Monday",
    value:"Monday",
    text:"Monday",
  },
  {
    key: "Tuesday",
    value:"Tuesday",
    text:"Tuesday",
  },
  {
    key: "Wednesday",
    value:"Wednesday",
    text:"Wednesday",
  },  {
    key: "Thursday",
    value:"Thursday",
    text:"Thursday",
  },  {
    key: "Friday",
    value:"Friday",
    text:"Friday",
  },  {
    key: "Saturday",
    value:"Saturday",
    text:"Saturday",
  },  {
    key: "Sunday",
    value:"Sunday",
    text:"Sunday",
  },
];
class FeedLog extends Component{
  constructor(){
    super()
    this.state = {
      ounces: 0,
      minutes: 0,
      comment: '',
      comment2: '',
      bottleDay: 'Monday',
      breastDay: 'Monday',
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
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.handleComment2 = this.handleComment2.bind(this);
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
    console.log(this.comment)
    Axios.post("http://localhost:5000/eating-bottle", {
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

    let bottletemp1 = this.state.bottleEntry1[0]
    let bottletemp2 = this.state.bottleEntry2[0]
    let bottletemp3 = this.state.bottleEntry3[0]
    let bottletemp4 = this.state.bottleEntry4[0]
    let bottletemp5 = this.state.bottleEntry5[0]
    let bottletemp6 = this.state.bottleEntry6[0]
    let bottletemp7 = this.state.bottleEntry7[0]
    let bottletemp8 = this.state.bottleEntry1[1]
    let bottletemp9 = this.state.bottleEntry2[1]
    let bottletemp10 = this.state.bottleEntry3[1]
    let bottletemp11 = this.state.bottleEntry4[1]
    let bottletemp12 = this.state.bottleEntry5[1]
    let bottletemp13 = this.state.bottleEntry6[1]
    let bottletemp14 = this.state.bottleEntry7[1]

    if (!importantbottle[0]) {
      bottletemp1 = null
      bottletemp8 = null
    }
    if (!importantbottle[1]) {
      bottletemp2 = null
      bottletemp9 = null
    }
    if (!importantbottle[2]) {
      bottletemp3 = null
      bottletemp10 = null
    }
    if (!importantbottle[3]) {
      bottletemp4 = null
      bottletemp11 = null
    }
    if (!importantbottle[4]) {
      bottletemp5 = null
      bottletemp12 = null
    }
    if (!importantbottle[5]) {
      bottletemp6 = null
      bottletemp13 = null
    }
    if (!importantbottle[6]) {
      bottletemp7 = null
      bottletemp14 = null
    }

    Axios.post("http://localhost:5000/importantEntriesEating", {
      temp1: bottletemp1,
      temp2: bottletemp2,
      temp3: bottletemp3,
      temp4: bottletemp4,
      temp5: bottletemp5,
      temp6: bottletemp6,
      temp7: bottletemp7,
      temp8: bottletemp8,
      temp9: bottletemp9,
      temp10: bottletemp10,
      temp11: bottletemp11,
      temp12: bottletemp12,
      temp13: bottletemp13,
      temp14: bottletemp14,
      temp15: this.state.comment
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

  let foodtemp1 = this.state.breastEntry1[0]
  let foodtemp2 = this.state.breastEntry2[0]
  let foodtemp3 = this.state.breastEntry3[0]
  let foodtemp4 = this.state.breastEntry4[0]
  let foodtemp5 = this.state.breastEntry5[0]
  let foodtemp6 = this.state.breastEntry6[0]
  let foodtemp7 = this.state.breastEntry7[0]
  let foodtemp8 = this.state.breastEntry1[1]
  let foodtemp9 = this.state.breastEntry2[1]
  let foodtemp10 = this.state.breastEntry3[1]
  let foodtemp11 = this.state.breastEntry4[1]
  let foodtemp12 = this.state.breastEntry5[1]
  let foodtemp13 = this.state.breastEntry6[1]
  let foodtemp14 = this.state.breastEntry7[1]

  if (!importantbreast[0]) {
    foodtemp1 = null
    foodtemp8 = null
  }
  if (!importantbreast[1]) {
    foodtemp2 = null
    foodtemp9 = null
  }
  if (!importantbreast[2]) {
    foodtemp3 = null
    foodtemp10 = null
  }
  if (!importantbreast[3]) {
    foodtemp4 = null
    foodtemp11 = null
  }
  if (!importantbreast[4]) {
    foodtemp5 = null
    foodtemp12 = null
  }
  if (!importantbreast[5]) {
    foodtemp6 = null
    foodtemp13 = null
  }
  if (!importantbreast[6]) {
    foodtemp7 = null
    foodtemp14 = null
  }

  Axios.post("http://localhost:5000/importantEntriesEating", {
    temp1: foodtemp1,
    temp2: foodtemp2,
    temp3: foodtemp3,
    temp4: foodtemp4,
    temp5: foodtemp5,
    temp6: foodtemp6,
    temp7: foodtemp7,
    temp8: foodtemp8,
    temp9: foodtemp9,
    temp10: foodtemp10,
    temp11: foodtemp11,
    temp12: foodtemp12,
    temp13: foodtemp13,
    temp14: foodtemp14,
    temp15: this.state.comment2
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
  handleBreastDayChange = (e) => {
    this.setState({ breastDay: e.target.value})
  }
  handleChange(e, data) {
    console.log(data.value);
    this.setState({ bottleDay: data.value});
  }
  handleChange2(e, data) {
    this.setState({ breastDay: data.value });
  }
  handleComment(e) {
    console.log(e.target.value)
    this.setState({ comment: e.target.value });
  }
  handleComment2(e) {
    console.log(e.target.value)
    this.setState({ comment2: e.target.value });
  }
  handleCheckClick1(value) {
    //console.log("Test 1", value)
    for(var i =0; i < 7; i++) {
      if (i === value) {
        importantbottle[i] ? importantbottle[i]=false : importantbottle[i]=true;
      }
    }
  }
  handleCheckClick2(value) {
    //console.log("Test 2", value)
    for(var i =0; i < 7; i++) {
      if (i === value) {
        importantbreast[i] ? importantbreast[i]=false : importantbreast[i]=true;
      }
    }
  }
  
  render(){
    return (
      <div>
        <Container>
          <Header />
          <Segment>
            <Grid columns={2} centered divided='vertically'>
              <Grid.Row>
                  <Grid.Column name="milk entries">
                    <Form style={{"width":"50%", "left":"25%"}}>
                      <h2>Milk Entries</h2>
                      <Form.Field >
                        <label>Ounces: </label>
                        <Input 
                          type="number" 
                          fluid placeholder='Enter a number' 
                          value={this.state.ounces} 
                          onChange={this.handleOunceChange}>
                        </Input>
                      </Form.Field>
                      <Form.Field>
                        <label>Day:</label>
                        <Dropdown 
                          placeholder='Select a Day' 
                          selection fluid options={days} 
                          onChange={this.handleChange}>
                        </Dropdown>
                      </Form.Field>
                      <Form.Field>
                        <label>Comment: </label>
                        <Input 
                          fluid placeholder='Enter a comment'
                          value={this.state.comment} 
                          onChange={this.handleComment}>
                        </Input>
                      </Form.Field>
                      <Form.Field>
                        <Button color='green' onClick={this.handleClick}>Record</Button>
                        <Button color='green' onClick={this.handleClick3}>Save</Button>
                        <Button color='green' onClick={this.handleClick4}>Load</Button>
                      </Form.Field>
                    </Form>
                  </Grid.Column>
                  <Grid.Column name="milk records" style={{"left":"1%"}}>
                    <h3>
                      <Checkbox style={{"padding-right":"10%"}} label={<label>Mark Important</label>} onClick={() => this.handleCheckClick1(0)}></Checkbox>
                      {this.state.bottleEntry1[0]} : {this.state.bottleEntry1[1]} Ounces
                    </h3>
                    <h3>
                      <Checkbox style={{"padding-right":"10%"}} label={<label>Mark Important</label>} onClick={() => this.handleCheckClick1(1)}></Checkbox>
                      {this.state.bottleEntry2[0]} : {this.state.bottleEntry2[1]} Ounces
                    </h3>
                    <h3>
                      <Checkbox style={{"padding-right":"10%"}} label={<label>Mark Important</label>} onClick={() => this.handleCheckClick1(2)}></Checkbox>
                      {this.state.bottleEntry3[0]} : {this.state.bottleEntry3[1]} Ounces
                    </h3>
                    <h3>
                      <Checkbox style={{"padding-right":"10%"}} label={<label>Mark Important</label>} onClick={() => this.handleCheckClick1(3)}></Checkbox>
                      {this.state.bottleEntry4[0]} : {this.state.bottleEntry4[1]} Ounces
                    </h3>
                    <h3>
                      <Checkbox style={{"padding-right":"10%"}} label={<label>Mark Important</label>} onClick={() => this.handleCheckClick1(4)}></Checkbox>
                      {this.state.bottleEntry5[0]} : {this.state.bottleEntry5[1]} Ounces
                    </h3>
                    <h3>
                      <Checkbox style={{"padding-right":"10%"}} label={<label>Mark Important</label>} onClick={() => this.handleCheckClick1(5)}></Checkbox>
                      {this.state.bottleEntry6[0]} : {this.state.bottleEntry6[1]} Ounces
                    </h3>
                    <h3>
                      <Checkbox style={{"padding-right":"10%"}} label={<label>Mark Important</label>} onClick={() => this.handleCheckClick1(6)}></Checkbox>
                      {this.state.bottleEntry7[0]} : {this.state.bottleEntry7[1]} Ounces
                    </h3>
                  </Grid.Column>
              </Grid.Row>


              <Grid.Row>
                <Grid.Column>
                  <Form style={{"width":"50%", "left":"25%"}}>
                    <h2>Normal Food Entries</h2>
                    <Form.Field>
                      <label>Ounces: </label>
                      <Input 
                        type="number" 
                        fluid placeholder='Enter a number'
                        value={this.state.minutes}
                        onChange={this.handleMinutesChange}>
                      </Input>
                    </Form.Field>
                    <Form.Field>
                      <label>Day:</label>
                      <Dropdown 
                        placeholder='Select a Day' 
                        selection fluid options={days}
                        onChange={this.handleChange2}
                      ></Dropdown>
                    </Form.Field>
                    <Form.Field>
                      <label>Comment: </label>
                      <Input 
                        fluid placeholder='Enter a comment'
                        value={this.state.comment2} 
                        onChange={this.handleComment2}>
                      </Input>
                    </Form.Field>
                    <Form.Field>
                      <Button color='green' onClick={this.handleClick2}>Record</Button>
                      <Button color='green' onClick={this.handleClick5}>Save</Button>
                      <Button color='green' onClick={this.handleClick6}>Load</Button>
                    </Form.Field>
                  </Form>
                </Grid.Column>
                <Grid.Column>
                  <h3>
                    <Checkbox style={{"padding-right":"10%"}} label={<label>Mark Important</label>} onClick={() => this.handleCheckClick2(0)}></Checkbox>
                    {this.state.breastEntry1[0]} : {this.state.breastEntry1[1]} Ounces
                  </h3>
                  <h3>
                    <Checkbox style={{"padding-right":"10%"}} label={<label>Mark Important</label>} onClick={() => this.handleCheckClick2(1)}></Checkbox>
                    {this.state.breastEntry2[0]} : {this.state.breastEntry2[1]} Ounces
                  </h3>
                  <h3>
                    <Checkbox style={{"padding-right":"10%"}} label={<label>Mark Important</label>} onClick={() => this.handleCheckClick2(2)}></Checkbox>
                    {this.state.breastEntry3[0]} : {this.state.breastEntry3[1]} Ounces
                  </h3>
                  <h3>
                    <Checkbox style={{"padding-right":"10%"}} label={<label>Mark Important</label>} onClick={() => this.handleCheckClick2(3)}></Checkbox>
                    {this.state.breastEntry4[0]} : {this.state.breastEntry4[1]} Ounces
                  </h3>
                  <h3>
                    <Checkbox style={{"padding-right":"10%"}} label={<label>Mark Important</label>} onClick={() => this.handleCheckClick2(4)}></Checkbox>
                    {this.state.breastEntry5[0]} : {this.state.breastEntry5[1]} Ounces
                  </h3>
                  <h3>
                    <Checkbox style={{"padding-right":"10%"}} label={<label>Mark Important</label>} onClick={() => this.handleCheckClick2(5)}></Checkbox>
                    {this.state.breastEntry6[0]} : {this.state.breastEntry6[1]} Ounces
                  </h3>
                  <h3>
                    <Checkbox style={{"padding-right":"10%"}} label={<label>Mark Important</label>} onClick={() => this.handleCheckClick2(6)}></Checkbox>
                    {this.state.breastEntry7[0]} : {this.state.breastEntry7[1]} Ounces
                  </h3>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <br></br>
          <br></br>
          <br></br>
        </Container>
      </div>
    );
  }
}

export default FeedLog;