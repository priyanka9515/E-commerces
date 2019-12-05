import React from "react";
import "./Box.css";
import faker from "faker";
import "./ProductList";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Box extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} />
        <h5> ₹{this.props.price}</h5>
        <figcaption style={{ width: "250px", height: "50px" }}>
          {this.props.description}
        </figcaption>
        {/* <Button style={{ height: "40px", width: "100px" }}> cart</Button> */}
      </div>
      // </div>
    );
  }
}
