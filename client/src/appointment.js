import React from "react";
//import './ImportantEntries.css';
import Header from "./component/Header";
import Table from "./apptable";
import Axios from 'axios';
import { styled } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box, makeStyles, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    KeyboardTimePicker
  } from '@material-ui/pickers';
import { format } from 'date-fns';

const useStyle = makeStyles(theme =>({
    root:{
      '& .MuiFormControl-root':{
        margin: theme.spacing(3)
      }
    }
  }))
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

let msg;

export default class ImportantEntries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewTable: false
        };
        this.handleRefreshClick = this.handleRefreshClick.bind(this);
    }
    
    handleRefreshClick() {
        Axios.post("http://localhost:5000/get-appointment" )
        .then((response) => {
            if(response.msg.message) {
              console.log(response.msg.message)
            }
            else {
              msg=[...response.msg];
              this.setState({viewTable: true });
            }
        });
    }
   classes = useStyle();
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
    }

    render(){
        return(
          <Container>
        <Header />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <form className={classes.root} onSubmit={(e => submit(e))}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Item><Box><h1>Make Appointment</h1></Box>
        <KeyboardDatePicker
          label="Date Picker"
          value={selectedDate}
          onChange={handleDateChange}
        />
        <KeyboardTimePicker
        label="Time Picker"
        value={selectedTime}
        onChange={handleTimeChange}
        />
        <TextField onChange={(e) =>handle(e)} id="doctor" label="Doctor" variant="outlined" />
        <TextField onChange={(e) =>handle(e)} id="location" label="Location" variant="outlined" />
        <Box m={2}>
        <Button variant='contained' size='large' >
          Submit</Button>
          </Box>
          </Item>
        </MuiPickersUtilsProvider>
          </form>
        </Grid>
        <Grid item xs={12}>
          <Item><h1>Appointments</h1>
            <Table ></Table>
          </Item>
        </Grid>
      </Grid>
    </Container>
           
               
                {(this.state.viewTable ) ? <Table records={data}/> : 
                <div>
                    <h1>There are no entries marked as important</h1>
                    <button type="button" onClick={this.handleRefreshClick}>Check Again</button>
                </div>}
                
        )
    }
}