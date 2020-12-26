import React, { Component } from "react";

class Resume extends Component {
  state = {};
  render() {
    return (
      <div
        style={{ backgroundColor: "#DB7070", height: "95vh", color: "white" }}
      >
        <div className="row p-5" style={{ height: "100%" }}>
          <div className="col-md-6 col-xs-12" style={{ textAlign: "left" }}>
            <h1
              className="p-5"
              style={{
                color: "white",
                letterSpacing: "1rem",
                verticalAlign: "middle",
              }}
            >
              Resumé
            </h1>
            {/* <div className="row p-5" style={{ height: "100%" }}> */}
            <div className="p-5">
              <h3>Education</h3>
              <p>University of Nottingham</p>
              <p>BSc Computer Science (1st class)</p>
              <button className="btn btn-light">Download Resumé</button>
              {/* </div> */}
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            <h1
              className="p-5"
              style={{
                color: "#DB7070",
                letterSpacing: "1rem",
                verticalAlign: "middle",
              }}
            >
              -
            </h1>
            <div className="p-5" style={{ textAlign: "left" }}>
              <h3>Work</h3>
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
