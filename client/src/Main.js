import REACT, { Component, useState, useEffect } from "react";

import MainCSS from "./main.module.css";
import graph from "./images/graph.png";
import { Tips } from "./Tips.js";
import { Health } from "./Gauge";
import diaper from "./images/diaper.png";
import bottle from "./images/bottle.png";
import sleep from "./images/sleep.png";
import { gradeBath } from "./review.js";
import { gradeSleep } from "./review.js";
import { gradeEating } from "./review.js";
import {summaryBath} from './summary.js';
import {summarySleep} from './summary.js';
import {summaryFood} from './summary.js';
import { ChildrenList } from "./childrenList.js";

import Modal from "./component/Modal";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
let total = 0;
let total2 = 0;
let test1 = 0;
let test2 = 0;
let name = "";
let age = 0;
let height = "";
let weight = "";

Axios.post("http://localhost:5000/get-total", {
      user: localStorage.getItem("username")
    }).then((response) => {
        //let length = response.data.length;
        total = response.data[0].Total;
        total2 = response.data[1].Total;
        test1 = response.data[2].Total;
        test2 = response.data[3].Total;
        console.log(response.data[0].Total)
    });

Axios.post("http://localhost:5000/babyDetails", {
    user: localStorage.getItem("username")
}).then((response) => {
    name = response.data[0].Name;
    age = response.data[0].Age;
    height = response.data[0].Height;
    weight = response.data[0].Weight;
});


function Main() {
  const [eatingTotal, setEatingTotal] = useState(total);
  const [sleepingTotal, setSleepingTotal] = useState(test2);
  const [restroomTotal, setRestroomTotal] = useState(test1);
  const [addChild, setAddChild] = useState({
    name: name,
    height: height,
    age: age,
    weight: weight,
  });
  const [displayModal, setDisplayModal] = useState(false);
  const navigate = useNavigate();
  const handleClick = (e) => {};

  const handleUpdate = () => {
    //window.location.reload(true);
    navigate("/home");
    //let username = getUser();
    //console.log(username);
  };

  const handleBath = () => {
    navigate("/bathroom");
  };

  const handleSleep = () => {
    navigate("/sleeping");
  };

  const handleEating = () => {
    navigate("/eating");
  };

  const handleLogout = () => {
    localStorage.setItem("isSignedIn", JSON.stringify(false))
    navigate("/");
  };

  const handleAppt = () => {
    navigate("/appointment")
  };
  const handleAddChild = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/addBaby", {
      name: e.target["name"].value,
      age: e.target["age"].value,
      height: e.target["height"].value,
      weight: e.target["weight"].value,
      user: localStorage.getItem("username")
    });
    setAddChild({
      name: e.target["name"].value,
      age: e.target["age"].value,
      height: e.target["height"].value,
      weight: e.target["weight"].value,
    });
    // this.setState({ displayModal: false });
    //  for (let i = 0; i < e.target; i++){
    //      console.log(e.target[i].value)
    //  }
    setDisplayModal(false);
  };
  const handleModal = () => {
    setDisplayModal(true);
  };
  const handleModalClosure = () => {
    navigate("/home");
  };
  return (
    <body
      style={{ marginTop: "0px", width: "100%", backgroundColor: "#03dbfc" }}
    >
      <h1 className={MainCSS.title}>BabyTracker</h1>
      <div className={MainCSS.navbar}>
        <button
          className={MainCSS.nav}
          style={{ marginLeft: "140px" }}
          onClick={handleBath}
        >
          Bath
        </button>
        <button className={MainCSS.nav} onClick={handleSleep}>
          Sleep
        </button>
        <button className={MainCSS.nav} onClick={handleEating}>
          Eating
        </button>
        <button className={MainCSS.logout} onClick={handleLogout}>
          Log Out
        </button>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          borderBottom: "2px solid grey",
          backgroundColor: "white",
          zIndex: "0",
          width: "100%",
        }}
      >
        <div style={{ width: "50%" }}>
          <table>
            <tr style={{ display: "flex" }}>
              <div style={{ width: "400px" }}>
                <h1>Bath Overview</h1>
                <Health
                  color="green"
                  grade={gradeBath(test1, addChild.age)}
                  src={diaper}
                  status={graph}
                />
              </div>
              <div>
                <h1>Summary</h1>
                <p>{summaryBath(test1, addChild.age)}</p>
              </div>
            </tr>
            <tr style={{ display: "flex" }}>
              <div style={{ width: "400px" }}>
                <h1>Sleeping Overview</h1>
                <Health
                  color="green"
                  grade={gradeSleep(test2, addChild.age)}
                  src={sleep}
                  status={graph}
                />
              </div>
              <div>
                <h1>Summary</h1>
                <p>{summarySleep(test2, addChild.age)}</p>
              </div>
            </tr>
            <tr style={{ display: "flex" }}>
              <div style={{ width: "400px" }}>
                <h1>Eating Overview</h1>
                <Health
                  color="green"
                  grade={gradeEating(total, total2, addChild.age)}
                  src={bottle}
                  status={graph}
                />
              </div>
              <div>
                <h1>Summary</h1>
                <p>{summaryFood(total, total2, addChild.age)}</p>
              </div>
            </tr>
          </table>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <div style={{ marginLeft: "100px" }}>
              <h1 style={{ fontSize: "23px" }}>Name: {addChild.name}</h1>
              <h1 style={{ fontSize: "23px" }}>Age: {addChild.age}</h1>
              <h1 style={{ fontSize: "23px" }}>Height: {addChild.height}</h1>
              <h1 style={{ fontSize: "23px" }}>Weight: {addChild.weight}</h1>
              <button className={MainCSS.makeapp} onClick={handleAppt}>Make Appointment</button>
            </div>
          </div>
          <div
            style={{
              display: "stack",
              marginTop: "30px",
              marginLeft: "30px",
            }}
          >
            <button
              className={MainCSS.add}
              onClick={() => {
                handleModal();
              }}
            >
              {" "}
              + Add Child
            </button>
            {displayModal ? (
              <Modal
                action={(e) => handleAddChild(e)}
                title="Delete Stream"
                handleClick={handleModalClosure}
              />
            ) : null}
          </div>
          <div
            style={{
              display: "stack",
              marginTop: "30px",
              marginLeft: "30px",
            }}
          >
            <button className={MainCSS.summary} onClick={handleUpdate}>
              {" "}
              Update Summary
            </button>
          </div>
          <div style={{ marginTop: "100px" }}>
            <Tips />
          </div>
        </div>
      </div>
      <div style={{ height: "60px", margin: "auto", backgroundColor: "white" }}>
        <footer style={{ textAlign: "center" }}>
          Copyright <span>&copy;</span> 2021 Pro Programmers. All Rights
          Reserved.
        </footer>
      </div>
    </body>
  );
}

export default Main;