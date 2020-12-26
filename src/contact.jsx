import React, { Component } from "react";
import "./page.css";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div
        className="mainDiv"
        style={{
          backgroundColor: "#80D4E7",
          color: "white",
        }}
      >
        <h1 className="title p-5">Contact</h1>

        <div className="buttonDiv">
          <button className="btn btn-light contactButton">Email</button>
        </div>
        <div className="buttonDiv">
          <button className="btn btn-light contactButton">Linkedin</button>
        </div>
        <div className="buttonDiv">
          <button className="btn btn-light contactButton">Trimmy.co.uk</button>
        </div>
      </div>
    );
  }
}

export default Contact;
