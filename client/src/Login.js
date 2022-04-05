import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLogin: true,
      showRegister: false,
      username: "",
      password: "",
    };
    this.handleClick2 = this.props.handleClick;
    this.handleClick3 = this.props.handleReg;
  }

  //Handles switch between
  handleClick = () => {
    console.log("this is:", this);

    if (this.state.showLogin == false) {
      this.setState({
        showLogin: true,
        showRegister: false,
      });
    } else {
      this.setState({
        showLogin: false,
        showRegister: true,
      });
    }
  };

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <>
        {this.state.showLogin ? (
          <div className="row mt-5">
            <div className="col-md-6 m-auto">
              <div className="card card-body">
                <h1 className="text-center mb-3">
                  <i className="fas fa-sign-in-alt"></i> Login
                </h1>

                {/* <form> */}
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="username"
                    id="username"
                    name="username"
                    className="form-control"
                    placeholder="Enter Username"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                  />
                </div>
                <button
                  className="btn btn-primary btn-block"
                  onClick={() =>
                    this.handleClick2(this.state.username, this.state.password)
                  }
                >
                  Login
                </button>
                {/* </form> */}
                <p className="lead mt-4">
                  No Account?{" "}
                  <button onClick={this.handleClick}>Register</button>
                </p>
              </div>
            </div>
          </div>
        ) : null}
        {this.state.showRegister ? (
          <div className="row mt-5">
            <div className="col-md-6 m-auto">
              <div className="card card-body">
                <h1 className="text-center mb-3">
                  <i className="fas fa-sign-in-alt"></i> Register
                </h1>
                <div className="form-group">
                  {/* <label>Email</label> */}
                  <input
                    type="username"
                    id="username"
                    name="username"
                    className="form-control"
                    placeholder="Enter Email"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                  />
                </div>
                <div className="form-group">
                  {/* <label className="form-label">Email</label> */}
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                  />
                </div>
                <button
                  className="btn btn-primary btn-block"
                  onClick={() =>
                    this.handleClick3(this.state.username, this.state.password)
                  }
                >
                  Register
                </button>
                <p className="lead mt-4">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={this.handleClick}
                  >
                    Cancel
                  </button>
                </p>
              </div>
            </div>
          </div>
        ) : null}
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    );
  }
}

export default LoginComponent;
