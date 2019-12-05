import React, { Component } from "react";
import ProductList from "./components/ProductList.js";
import Navbar from "./Navbar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
// import * as serviceWorker from "./serviceWorker";
import signin from "./signin";
import Signup from "./signup";
import item from "./item";

import "bootstrap/dist/css/bootstrap.min.css";

class container extends Component {
  render() {
    return (
      <div className="Navbar">
        <Router>
          <Navbar />
          <Route path="/signin" component={signin} />
          <Route path="/signup" exact component={Signup} />
          <ProductList />
          <Route path="/item" exact component={item} />
        </Router>
        );
      </div>
    );
  }
}

export default container;
