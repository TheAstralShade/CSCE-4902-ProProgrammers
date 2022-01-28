//import './App.css';
import React, { Component } from "react";
import  ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Main} from "./Main";
import {AddChild} from './addchild'
import LoginComponent from './Login';
import Bathroom from './bathroom';
import SleepLog from './sleeplog';
import Feeding from './Eating';

class App extends Component {
  render() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LoginComponent />} />
          <Route path ="/home" element={<Main />} />
          <Route path ="/addnewchild" element={<AddChild />} />
          <Route path ="/bathroom" element={<Bathroom />} />
          <Route path ="/eating" element={<Feeding />} />
          <Route path ="/sleeping" element={<SleepLog />} />
        </Routes>
      </div>
    </Router>
  );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
