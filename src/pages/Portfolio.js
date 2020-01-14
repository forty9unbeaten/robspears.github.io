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
      <React.Fragment>
        <div className="Portfolio-header">
          <h2>Javascript projects</h2>
          <h3>Click on a project to view it!</h3>
          <h4>
            These projects were made utilizing Javascript's Document Object
            Model web API.
          </h4>
        </div>
        <ul className="Portfolio-projects">
          <PortfolioItem
            link="https://robsp3ars.gitlab.io/connectFour"
            projectName="Connect Four"
            description="Take turns with a friend playing the tic-tac-toe style game."
          />
          <PortfolioItem
            link="https://robsp3ars.gitlab.io/sokoban"
            projectName="Jedi Sokoban"
            description="Move Yoda across the puzzle board and put the rocks back in
          their place."
          />
          <PortfolioItem
            link="https://robsp3ars.gitlab.io/wordSearch"
            projectName="Premier League Word Search"
            description="A simple word search that hides the names of 3 English Premier
          League clubs in a 10x10 grid."
          />
          <PortfolioItem
            link="https://robsp3ars.gitlab.io/towerOfHanoi"
            projectName="Tower of Hanoi"
            description="Strategically place disks on top of one another and move them
          between 3 pegs in the least possible number of moves."
          />
          <PortfolioItem
            link="https://robsp3ars.gitlab.io/photosFromHere"
            projectName="Photos From Here"
            description="Pick a location or use your own and search for photos on Flickr."
          />
        </ul>
        <div className="Portfolio-header">
          <h4>
            These projects were made using the React framework and Redux
            application state management.
          </h4>
        </div>
        <ul className="Portfolio-projects">
          <PortfolioItem
            link="https://ty914.gitlab.io/assessment---kwitter-frontend/"
            projectName="Twitter Clone"
            description="Mock social networking platform"
          />
        </ul>
      </React.Fragment>
    );
  }
}
