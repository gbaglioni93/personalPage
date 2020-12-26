import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import mee from "./img/mee.png";
import "./page.css";
class Homepage extends Component {
  state = {};
  render() {
    return (
      <div
        className="mainDiv"
        style={{
          backgroundColor: "#609E98",
        }}
      >
        <div className="row p-5" style={{ height: "100%" }}>
          <div className="mainPageDivs col-md-8 col-xs-12 ">
            <h1 className="myName">GIORGIO BAGLIONI</h1>
          </div>
          <div className="mainPageDivPicture col-md-4 col-xs-12">
            <img className="myPicture" alt="pic of me" src={mee}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
