import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          backgroundColor: "#FBC17D",
          height: "95vh",
        }}
      >
        <div className="row" style={{ height: "100%", textAlign: "left" }}>
          <div
            className="col-md-10 col-xs-12 p-5"
            style={{ marginRight: "auto", marginLeft: "auto" }}
          >
            <div className="p-5" style={{ color: "#45341F" }}>
              <h1
                className="pb-5"
                style={{
                  letterSpacing: "1rem",
                  verticalAlign: "middle",
                }}
              >
                About
              </h1>

              <p>
                I’m a really passionate problem solver. After my barber told me
                about the hassle he goes through to schedule appointments with
                his customers and the lack of suitable solution on the market, I
                decided to do something about it and co-founded a company called
                Trimmy.
              </p>
              <p>
                Aside from that, the UK went into a nationwide lockdown in 2020
                and I decided to learn Python. I built myself a home-security
                system with surveillance cameras, notifications to contacts and
                a house-wide alarm.
              </p>
              <p>
                I’m heavily into sports and captained my University Ice Hockey
                team. I also ski, play 5-a-side football/soccer and am a major
                fan of Swansea City FC.
              </p>
              <p>Favourite books: Power of Habit, Hooked, The Lean Start Up.</p>
              <p>Fluent in English and Italian.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
