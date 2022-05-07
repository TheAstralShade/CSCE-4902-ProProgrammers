import "./App.css";
import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Main from "./Main";
import { AddChild } from "./addchild";
import { toast } from "react-toastify";
import Axios from "axios";
import LoginComponent from "./Login";
import Bathroom from "./bathroom";
import SleepLog from "./sleeplog";
import Feeding from "./Eating";
import ImportantEntries from "./importantEntries";
import ProctedRoute from "./component/ProtectedRoute";

function App() {
  const [isSignedIn, setSigned] = useState(false);
  const navigate = useNavigate();
  console.log(isSignedIn);
  const handleClick2 = async (username, password) => {
    Axios.post("http://localhost:5000/login", {
      username,
      password,
    })
      .then((response) => {
        console.log(response);
        toast.success(` Welcome ${response.data}`, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setSigned(true);
        setTimeout(() => {
          navigate("/home");
        }, 3000);
      })

      .catch((error) => {
        toast.error(error.response.data.message, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  const handleClick3 = async (username, password) => {
    Axios.post("http://localhost:5000/register", {
      usernameSet: username,
      passwordSet: password,
    })
      .then((res) => {
        console.log(res);
        toast.success(` User successfully created`, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((err) => {
        console.log(err.response);
        toast.error(err.response.data, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <Fragment>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <LoginComponent
                handleClick={handleClick2}
                handleReg={handleClick3}
              />
            }
          />

          <Route
            path="/home"
            element={
              <ProctedRoute isSignedIn={isSignedIn}>
                <Main />
              </ProctedRoute>
            }
          />
          <Route
            path="/addnewchild"
            element={
              <ProctedRoute isSignedIn={isSignedIn}>
                <AddChild />
              </ProctedRoute>
            }
          />
          <Route
            path="/bathroom"
            element={
              <ProctedRoute isSignedIn={isSignedIn}>
                <Bathroom />
              </ProctedRoute>
            }
          />
          <Route
            path="/eating"
            element={
              <ProctedRoute isSignedIn={isSignedIn}>
                <Feeding />
              </ProctedRoute>
            }
          />
          <Route
            path="/sleeping"
            element={
              <ProctedRoute isSignedIn={isSignedIn}>
                <SleepLog />
              </ProctedRoute>
            }
          />
          <Route
            path="/important"
            element={
              <ProctedRoute isSignedIn={isSignedIn}>
                <ImportantEntries />
              </ProctedRoute>
            }
          />
        </Routes>
      </div>
    </Fragment>
  );
}
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isSignedIn: false,
//       username: "",
//       password: "",
//     };
//   }
//   handleClick2 = (username, password) => {
//     console.log(username, password);
//     Axios.post("http://localhost:5000/login", {
//       username: username,
//       password: password,
//     })
//       .then((response, err) => {
//         this.setState({ isSignedIn: true });
//         console.log(response);
//         toast.success(` Welcome ${response.data}`, {
//           position: "top-left",
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//         setTimeout(() => {
//           this.props.history.push("/home");
//         }, 3000);
//       })
//       .catch((err) => {
//         console.log(err.response);
//         toast.error(err.response.data.message, {
//           position: "top-left",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       });
//   };

//   render() {
//     return (
//       <Router>
//         <Fragment>
//           <div>
//             <Routes>
//               <Route
//                 exact
//                 path="/"
//                 element={
//                   <LoginComponent
//                     comp={this.state}
//                     handleClick={this.handleClick2}
//                   />
//                 }
//               />

//               <Route
//                 path="/home"
//                 element={
//                   <ProctedRoute isSignedIn={this.state.isSignedIn}>
//                     <Main />
//                   </ProctedRoute>
//                 }
//               />
//               <Route
//                 path="/addnewchild"
//                 element={
//                   <ProctedRoute isSignedIn={this.state.isSignedIn}>
//                     <AddChild />
//                   </ProctedRoute>
//                 }
//               />
//               <Route
//                 path="/bathroom"
//                 element={
//                   <ProctedRoute isSignedIn={this.state.isSignedIn}>
//                     <Bathroom />
//                   </ProctedRoute>
//                 }
//               />
//               <Route
//                 path="/eating"
//                 element={
//                   <ProctedRoute isSignedIn={this.state.isSignedIn}>
//                     <Feeding />
//                   </ProctedRoute>
//                 }
//               />
//               <Route
//                 path="/sleeping"
//                 element={
//                   <ProctedRoute isSignedIn={this.state.isSignedIn}>
//                     <SleepLog />
//                   </ProctedRoute>
//                 }
//               />
//               <Route
//                 path="/important"
//                 element={
//                   <ProctedRoute isSignedIn={this.state.isSignedIn}>
//                     <ImportantEntries />
//                   </ProctedRoute>
//                 }
//               />
//             </Routes>
//           </div>
//         </Fragment>
//       </Router>
//     );
//   }
// }

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

export default App;