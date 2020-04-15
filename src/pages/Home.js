import React, { Component } from "react";
import "./Home.css";

export class Home extends Component {
  componentDidMount = () => {
    // add bottom border to appropriate link on nav bar
    document.getElementsByName("home")[0].classList.add("selected");
  };

  render() {
    return (
      <div id="Home-container">
        <div id="Home-picContainer">
          <div
            id="Home-picture"
            alt={`Rob's Picture`}
            title={`Rob's Picture`}
          />
        </div>
        <p id="Home-aboutMe">
          Hello, my name is Rob Spears. I live in Indianapolis, IN and I am a
          professional software engineer. Here you can find and download a copy
          of my résumé and see some examples of the work I've done. You can also
          find my contact information if you have any questions or just want to
          say hello. <br /> <br />
          Thank you for taking the time to look around, and I look forward to
          hearing from you!
        </p>
      </div>
    );
  }
}
