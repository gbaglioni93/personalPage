import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import mee from "./img/mee.png";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          backgroundColor: "#609E98",
          height: "95vh",
        }}
      >
        <div className="row p-5" style={{ height: "100%" }}>
          <div
            className="col-md-8 col-xs-12"
            style={{ display: "flex", alignItems: "center" }}
          >
            <h1
              className="p-5"
              style={{
                color: "white",
                letterSpacing: "1rem",
                verticalAlign: "middle",
              }}
            >
              GIORGIO BAGLIONI
            </h1>
          </div>
          <div
            className="col-md-4 col-xs-12"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img style={{ width: "90%" }} alt="pic of me" src={mee}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
