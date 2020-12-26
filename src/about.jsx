import React, { Component } from "react";
import "./page.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div
        className="mainDiv"
        style={{
          backgroundColor: "#FBC17D",
        }}
      >
        <div className="row leftRow">
          <div className=" centerDivs col-md-10 col-xs-12 p-5">
            <div className="paragraphFont">
              <h1 className="title">About</h1>
              <span className="paragraphFont">
                <p>
                  I’m a really passionate problem solver. After my barber told
                  me about the hassle he goes through to schedule appointments
                  with his customers and the lack of suitable solution on the
                  market, I decided to do something about it and co-founded a
                  company called Trimmy.
                </p>

                <p>
                  I’m heavily into sports and captained my University Ice Hockey
                  team. I also ski, play 5-a-side football/soccer and am a major
                  fan of Swansea City FC.
                </p>
                <p>
                  Favourite books: Power of Habit, Hooked, The Lean Start Up.
                </p>
                <p>Fluent in English and Italian.</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
