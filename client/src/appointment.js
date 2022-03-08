import React, {useState} from 'react';
import Axios from "axios";
import Header from "./component/Header";
import { styled } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    KeyboardTimePicker
  } from '@material-ui/pickers';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Appt() {

  const [data, setData] = useState ({
    doctor:"",
    location:""
  })
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);

  }

  function handle(e) {
    const newdata = {...data}
    newdata[e.target.id] =e.target.value
    setData(newdata)
    console.log(newdata)
  }
  function submit(e){
      e.preventDefault();
      Axios.post("http://localhost:5000/appointments", {
        dateSet: data.date,
        doctorSet: data.doctor,
        locationSet: data.location
      })
      .then((response) => {
        console.log(response);
      });
  }
  return (
    <Container>
        <Header />
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <form onSubmit={(e => submit(e))}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Item>Make Appointment</Item>
        <Item><KeyboardDatePicker
          label="Date Picker"
          value={selectedDate}
          onChange={handleDateChange}
        />
        </Item>
        <Item><KeyboardTimePicker
        label="Time Picker"
        value={selectedDate}
        onChange={handleDateChange}
        /></Item>
        <Item>
        <TextField onChange={(e) =>handle(e)} id="outlined-basic" label="Doctor" variant="outlined" />
        </Item>
        <Item>
        <TextField onChange={(e) =>handle(e)} id="outlined-basic" label="Location" variant="outlined" />
        </Item>
        <Item>
        <button className="positive ui button" >
          Submit</button>
          </Item>
        </MuiPickersUtilsProvider>
          </form>
        </Grid>
        <Grid item xs={6}>
          <Item>Appointments</Item>
        </Grid>
      </Grid>
    </Container>
  );
}
