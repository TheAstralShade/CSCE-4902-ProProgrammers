import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './index.css';
import Axios from 'axios';

class LoginComponent extends Component {
  constructor(){
    super()
    this.state = {
      showLogin:true,
      showRegister:false,
      username: '',
      password: ''
    }
  }

  //Handles switch between
  handleClick = () => {
    console.log('this is:', this);
    if(this.state.showLogin == false){
      this.setState({
        showLogin:true,
        showRegister:false
      })
    }
    else{
      this.setState({
        showLogin:false,
        showRegister:true
      })
    }
    
  }

  handleClick2 = () => {
   //Area where login button click is recognized
   //class's can be misleading, read plain text to identify components if confused
   Axios.post("http://localhost:5000/login", {
    username: this.state.username,
    password: this.state.password,
  }).then((response) => {

    if(response.data.message) {
      console.log(response.data.message)
    }
    else {
      console.log(response.data[0].username)
      window.open("/home")
    }
  });

  }

  handleClick3 = () => {
    Axios.post("http://localhost:5000/register", {
      usernameSet: this.state.username,
      passwordSet: this.state.password,
    }).then((response) => {
      console.log(response);
    });
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value})
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value})
  }


  render(){
    return ( <div class="centered" > 
    { this.state.showLogin?
      <div id="LoginBox" class = "LoginCenter">
        <div class = "LogInTest">Log in</div>
        <hr class="Line"></hr>
        <div class="spacer">Space</div>
        <div class="UserNameTest">Username</div>
        <div class="UserNameTest">
        <input 
          value={this.state.username} 
          onChange={this.handleUsernameChange}
        />
        </div>
          <div class="spacer2">Space</div>
          <div class="UserNameTest">Password</div>
          <div class="UserNameTest">
          <input 
            type="password" 
            name="password"
            value={this.state.password} 
            onChange={this.handlePasswordChange}
          />
        </div>
        <div class="spacer2">Space</div>
        <div class="UserNameTest">
        <button class="ButtonFormat" onClick={this.handleClick2}>Log In</button>
        <button class="ButtonFormat" onClick={this.handleClick}>Register</button> 
        
        </div>
        
    
      </div>
      :null}
      {this.state.showRegister?
      <div id="LoginBox" class = "LoginCenter">
        <div class = "LogInTest">Register</div>
        <hr class="Line"></hr>
        <div class="spacer2">Space</div>
        <div class="UserNameTest">Email</div>
        <div class="UserNameTest">
          <input ></input>
        </div>
        <div class="spacer2">Space</div>
        <div class="UserNameTest">Username</div>
        <div class="UserNameTest">
          <input 
             value={this.state.username} 
             onChange={this.handleUsernameChange}
          />
        </div>
        <div class="spacer2">Space</div>
        <div class="UserNameTest">Password</div>
        <div class="UserNameTest">
        <input 
          type="password" 
          name="password" 
          value={this.state.password} 
          onChange={this.handlePasswordChange}
        />
        </div>
        <div class="spacer2">Space</div>
        <div class="UserNameTest">
          <button class="ButtonFormat" onClick={this.handleClick3}>Register</button>
          <button class="ButtonFormat" onClick={this.handleClick}>Cancel</button>
        </div>
      </div>
  :null}
    </div>
    )
  }
}

export default LoginComponent;

