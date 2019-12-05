import React, { Component } from "react";
import "./App.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Button } from "reactstrap";

import { Icon } from "react-icons-kit";
import { androidCart } from "react-icons-kit/ionicons/androidCart";

class Navbar extends Component {
  // handle = a => {
  //   if (a.Button === "click");
  // };
  render() {
    return (
      <div className="navbar">
        <div className="nav-left">
          <h1>SOALed out</h1>
        </div>
        <input placeholder="search here" />
        <div className="nav-right">
          <Link
            to="/signup"
            style={{
              textDecoration: "none",
              padding: "5px"
            }}
          >
            <Button variant="contained" color="primary">
              signup
            </Button>
          </Link>
          <Link
            to="/signin"
            style={{
              textDecoration: "none",
              padding: "5px"
            }}
          >
            <Button variant="contained" color="primary">
              signin
            </Button>
          </Link>
          <Button>
            <Icon size={35} icon={androidCart} style={{ align: "center" }} />{" "}
          </Button>
        </div>
      </div>
    );
  }
}

export default Navbar;
