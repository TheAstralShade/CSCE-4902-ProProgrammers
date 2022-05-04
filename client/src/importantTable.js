import React, { useState} from "react";
import "./ImportantEntries.css";
import Axios from 'axios';

const Table = ({records}) => {
  const [entries, setEntries] = useState(records);
  const handleRemoveClick = (entryId)=> {
    //update state (this removes row from table)
    const newEntries = [... entries];
    const index = entries.findIndex((entry)=> entry.id === entryId);
    newEntries.splice(index, 1);
    setEntries(newEntries);
    //remove from database
    Axios.post("http://localhost:5000/remove-importantEntry", 
    {
        id: entryId
    })
    .then((response) => {
        console.log(response);
    });
  }
  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Entry</th>
            <th>Quantity</th>
            <th>Day</th>
            <th>Comment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry)=> (
            <tr key={entry.id}>
              <td>{entry.entry}</td>
              <td>{entry.quantity}</td>
              <td>{entry.day}</td>
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
    </div>
  );
};

export default Table;