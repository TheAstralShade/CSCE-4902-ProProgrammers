import React, { useState} from "react";
import "./ImportantEntries.css";
import Axios from 'axios';
//import data from "./mock-data.json";

const Table = ({records}) => {
  const [entries, setEntries] = useState(records);
  const handleRemoveClick = (entryId)=> {
    //update state (this removes row from table)
    const newEntries = [... entries];
    const index = entries.findIndex((entry)=> entry.id === entryId);
    newEntries.splice(index, 1);
    setEntries(newEntries);
    //remove from database
    Axios.post("http://localhost:5000/remove-appointments", 
    {
        id: entryId
    })
    .then((response) => {
        console.log(response);
    });
  }
    const addData = (entry,date,time,doctor,location) => {
      Axios.post("http://localhost:5000/get-appointments",{
        records: [...entry.data]


      })
      .then((response) => {
        console.log(response);    
  })
    
  }

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Doctor</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry)=> (
            <tr key={entry.id}>
              <td>{entry.date}</td>
              <td>{entry.time}</td>
              <td>{entry.doctor}</td>
              <td>{entry.comment}</td>
              <td>
                <button type="button" onClick={()=> handleRemoveClick(entry.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" onClick={()=> addData(entry.id)}>
                  Add</button>
    </div>
  );
};

export default Table;