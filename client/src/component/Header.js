import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="ui secondary pointing  menu">
      <NavLink to="/" className="item">
        Baby Tracker
      </NavLink>

      <div className="right menu">
        <NavLink className=" item" to="/home">
          Home
        </NavLink>
        <NavLink className=" item" to="/eating">
          Feeding
        </NavLink>
        <NavLink className=" item" to="/bathroom">
          Bathroom
        </NavLink>
        <NavLink className=" item" to="/sleeping">
          Sleeping
        </NavLink>
        <NavLink className=" item" to="/important">
          Important Entries
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
