import React, { useState, useEffect } from "react";
import Bar from "./component/Progression";
import Sleeping from "./component/Sleeping";
import Header from "./component/Header";

function SleepLog() {
  const [calculated, setCalculated] = useState(0);
  // const [them, dispatch] = useReducer(reducerTheme, intial);
  const [data, setData] = useState({
    day: "",
    hoursOfSleep: 0,
    comments: "",
  });

  const options = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    setCalculated((data.hoursOfSleep / 24) * 100);
  }, [data.hoursOfSleep]);
  return (
    <>
        <div className="container">
          <Header />
          <div className="ui placeholder segment">
            <div className="ui two column very relaxed stackable grid">
              <Sleeping data={data} setData={setData} options={options} />
              <Bar day={data.day} options={options} calculated={calculated} />
            </div>
          </div>
        </div>
    </>
  );
}

export default SleepLog;