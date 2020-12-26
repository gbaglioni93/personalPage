import React, { Component } from "react";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div style={{ backgroundColor: "#80D4E7", height: "90vh" }}>
        <h1
          className="p-5"
          style={{
            color: "white",
            letterSpacing: "1rem",
            verticalAlign: "middle",
          }}
        >
          Contact
        </h1>{" "}
        <div className="pb-5">
          <button className="btn btn-light">Email</button>
        </div>
        <div className="pb-5">
          <button className="btn btn-light">Linkedin</button>
        </div>
        <div className="pb-5">
          <button className="btn btn-light">Trimmy.co.uk</button>
        </div>
      </div>
    );
  }
}

export default Contact;
