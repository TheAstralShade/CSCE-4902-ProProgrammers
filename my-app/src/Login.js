import React, { Component } from "react";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";

class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      showLogin: true,
      showRegister: false,
      username: "",
      password: "",
    };
    console.log("farouq");
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

  handleClick2 = () => {
    //Area where login button click is recognized
    //class's can be misleading, read plain text to identify components if confused
    // toast.success("🦄 Wow so easy!", {
    //   position: "top-left",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });

    Axios.post("http://localhost:5000/login", {
      username: this.state.username,
      password: this.state.password,
    }).then((response) => {
      console.log(response);
      if (response.data.message) {
        console.log(response.data.message);
        toast.error(response.data.message, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        console.log(response.data[0]);
        toast.success(` Welcome ${response.data}`, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      setTimeout(() => {
        window.open("/home");
      }, 3000);
    });
  };

  handleClick3 = () => {
    Axios.post("http://localhost:5000/register", {
      usernameSet: this.state.username,
      passwordSet: this.state.password,
    }).then((response) => {
      console.log(response);
    });
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
                  onClick={this.handleClick2}
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
                    type="username"
                    id="username"
                    name="username"
                    className="form-control"
                    placeholder="Enter Password"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                  />
                </div>
                <button
                  className="btn btn-primary btn-block"
                  onClick={this.handleClick3}
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
