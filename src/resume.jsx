import React, { Component } from "react";
import "./page.css";

class Resume extends Component {
  state = {};
  render() {
    return (
      <div
        className="mainDiv"
        style={{
          backgroundColor: "#DB7070",
          color: "white",
        }}
      >
        <div className="row col-10 centerDivs  leftRow">
          <div className="col-md-6 col-xs-12 leftRowResume">
            <h1 className="title">Resumé</h1>
            <div className="listText">
              <h3 className="secondaryTitle">Education</h3>
              <p className="">
                <strong>University of Nottingham</strong> <br></br>BSc Computer
                Science (1st class)
              </p>

              <button className="btn btn-light resumeButton">
                Download Resumé
              </button>
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="leftRowResume listText workRow">
              <h3 className="secondaryTitle">Work</h3>
              <p>Trimmy, Co-Founder</p>
              <p>Starling Bank, Growth Product Manager</p>
              <p>Fenix, Product Manager</p>
              <p>Procter and Gamble, IT Manager</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
