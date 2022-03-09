import React from "react";
import Axios from 'axios';
const Sleeping = ({ data, setData, options }) => {
  //Keeping data

  // const parse = (val) => {
  //   if (val < 10) {
  //     return `0${val}`;
  //   }
  //   return val;
  // };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onClick = (e) => {
    e.preventDefault();
    console.log(data);

    Axios.post("http://localhost:5000/sleeping", {
      daySet: data.day,
      sleepSet: data.hoursOfSleep,
      commentSet: data.comments,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="column">
      <h1 className="field">User Input</h1>
      <form className="ui form">
        <div className="field">
          <label> Days: </label>
          <select
           // className="ui selection dropdown"
            name="day"
            onChange={onChange}
          >
            <option value="Select A Day">Select A Day</option>
            {options.map((option, index) => {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
        <div className="field">
          <label> Time of Wake</label>
          {/* <div className="ui input"> */}
          <input
            type="range"
            min={0}
            step={1}
            max={24}
            value={data.hoursOfSleep}
            name="hoursOfSleep"
            onChange={onChange}
          />
          <span
            style={{
              backgroundColor: "#E9ECEF",
              border: "1px solid gray",
              margin: "20px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            {parseFloat(data.hoursOfSleep)}
          </span>
        </div>
        {/* </div> */}
        {/* <div className="field">
          <label> Time of Sleep</label>
          <div className="ui input">
            <input
              type="time"
              step="1"
              value={`${parse(data.sleepTime.hr)}:${parse(
                data.sleepTime.mm
              )}:${parse(data.sleepTime.ss)}`}
              name="sleepTime"
              onChange={onChange}
            />
          </div>
        </div> */}
        <div className="field">
          <label> Enter Comments</label>
          <div className="ui input">
            <input
              type="text"
              placeholder="Enter Comment."
              name="comments"
              onChange={onChange}
            />
          </div>
        </div>
        <button className="positive ui button" onClick={onClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Sleeping;