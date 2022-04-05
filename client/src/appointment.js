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
import { format } from 'date-fns';

//Table
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});
function createData(dat, tim, doc, loc) {
  return { dat, tim, doc, loc };
}

const rows = [
  createData( "April 1st 2022", "11:00 am", "Dr. John Doe", "Sunshine Clinic"),
  createData( "May 22nd 2022", "12:00 pm", "Dr. Jane Smith", "Pediatric Care"),
  createData( "June, 7 2022", "4:00 pm", "Dr. Jack Ripper", "Ortho Lab"),
];


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Appt() {

  const classes = useStyles();

  const [data, setData] = useState ({
    doctor:"",
    location:""
  })
  //date picker handler
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
  }
  //time picker handler
  const [selectedTime, setSelectedTime] = useState(new Date());
  const handleTimeChange = (time) => {
    console.log(time);
    setSelectedTime(time);
  }

  function handle(e) {
    const newdata = {...data}
    newdata[e.target.id] =e.target.value
    setData(newdata)
    console.log(newdata)
  }
  function submit(e){
      e.preventDefault();
      const dateObj = format(selectedDate, "yyyy/MM/dd")
      const timeObj = format(selectedTime, "HH:mm")
      Axios.post("http://localhost:5000/appointments", {
        dateSet: dateObj,
        timeSet: timeObj,  
        doctorSet: data.doctor,
        locationSet: data.location
      })
      .then((response) => {
        console.log(response);
      });
      
      
//const rows = createData(format(selectedDate, "LLL/do/yyyy"),format(selectedTime, "hh:mm aaaa") , data.doctor, data.location)
      
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
        value={selectedTime}
        onChange={handleTimeChange}
        /></Item>
        <Item>
        <TextField onChange={(e) =>handle(e)} id="doctor" label="Doctor" variant="outlined" />
        </Item>
        <Item>
        <TextField onChange={(e) =>handle(e)} id="location" label="Location" variant="outlined" />
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
          <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Doctor</TableCell>
            <TableCell align="right">Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="right">{row.dat}</TableCell>
              <TableCell align="right">{row.tim}</TableCell>
              <TableCell align="right">{row.doc}</TableCell>
              <TableCell align="right">{row.loc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
}
