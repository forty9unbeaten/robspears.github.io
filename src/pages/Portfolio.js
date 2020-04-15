import React, { Component } from "react";
import { PortfolioItem } from "../components";
import "./Portfolio.css";

export class Portfolio extends Component {
  componentDidMount = () => {
    // add bottom border to appropriate link on nav bar
    document.getElementsByName("portfolio")[0].classList.add("selected");
  };
  render() {
    return (
      <div id="Portfolio-container">
        <div className="Portfolio-header">
          <h2>Javascript projects</h2>
        </div>
        <div className="Portfolio-row">
          <PortfolioItem
            screenshot={require("../img/connectFour.png")}
            projectName="Connect Four"
            link="https://robsp3ars.gitlab.io/connectFour"
          />
          <PortfolioItem
            screenshot={require("../img/sokoban.png")}
            projectName="Star Wars Sokoban"
            link="https://robsp3ars.gitlab.io/sokoban"
          />
        </div>
        <div className="Portfolio-row">
          <PortfolioItem
            screenshot={require("../img/photosFrom.png")}
            projectName="Photos From..."
            link="https://robsp3ars.gitlab.io/photosFromHere"
          />
          <PortfolioItem
            screenshot={require("../img/kwitter.png")}
            projectName="Kwitter (Twitter Clone)"
            link="https://ty914.gitlab.io/assessment---kwitter-frontend/"
          />
        </div>
        <div className="Portfolio-header">
          <h2>Python projects</h2>
        </div>
        <div className="Portfolio-row">
          <PortfolioItem
            screenshot={require("../img/slacktweet.png")}
            projectName="Twitter SlackBot"
            link="https://github.com/forty9unbeaten/backend-slacktweet"
          />
        </div>
      </div>
    );
  }
}
