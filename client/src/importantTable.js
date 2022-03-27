import React, { useState} from "react";
import "./ImportantEntries.css";
import data from "./mock-data.json";

const Table = () => {
  const [entries, setEntries] = useState(data);
  const handleRemoveClick = (entryId)=> {
    const newEntries = [... entries];
    const index = entries.findIndex((entry)=> entry.id === entryId);
    newEntries.splice(index, 1);
    setEntries(newEntries);
  }
  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Entry</th>
            <th>Quantity</th>
            <th>Comment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry)=> (
            <tr key={entry.id}>
              <td>{entry.entry}</td>
              <td>{entry.quantity}</td>
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