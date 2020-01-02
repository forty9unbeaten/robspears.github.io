import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  handleSelection = evt => {
    const links = Array.from(
      document.getElementsByClassName("Navbar-selection")
    );
    links.forEach(link => {
      link.classList.remove("selected");
    });

    evt.currentTarget.classList.add("selected");
  };

  render() {
    return (
      <React.Fragment>
        <div id="Navbar-container">
          <div
            className="Navbar-selection selected"
            onClick={this.handleSelection}
          >
            <Link to="/">Home</Link>
          </div>
          <div className="Navbar-selection" onClick={this.handleSelection}>
            <Link to="/resume">Resume</Link>
          </div>
          <div className="Navbar-selection" onClick={this.handleSelection}>
            <Link to="/portfolio">Portfolio</Link>
          </div>
          <div className="Navbar-selection" onClick={this.handleSelection}>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
