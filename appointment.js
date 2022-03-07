import React, {useState} from 'react';
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

    const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);

  }
  return (
    <Container>
        <Header />
      <Grid container spacing={3}>
        <Grid item xs={6}>
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
        /></Item>
        <Item>
        <TextField id="outlined-basic" label="Doctor" variant="outlined" />
        </Item>
        <Item>
        <TextField id="outlined-basic" label="Location" variant="outlined" />
        </Item>
        </MuiPickersUtilsProvider>
          
        </Grid>
        <Grid item xs={6}>
          <Item>Appointments</Item>
        </Grid>
      </Grid>
    </Container>
  );
}
