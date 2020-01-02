import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  handleClick = () => {
    const links = Array.from(
      document.getElementsByClassName("Navbar-selection")
    );
    links.forEach(link => {
      link.classList.remove("selected");
    });
  };

  render() {
    return (
      <React.Fragment>
        <div id="Navbar-container">
          <div
            name="home"
            className="Navbar-selection"
            onClick={this.handleClick}
          >
            <Link to="/">Home</Link>
          </div>
          <div
            name="resume"
            className="Navbar-selection"
            onClick={this.handleClick}
          >
            <Link to="/resume">Resume</Link>
          </div>
          <div
            name="portfolio"
            className="Navbar-selection"
            onClick={this.handleClick}
          >
            <Link to="/portfolio">Portfolio</Link>
          </div>
          <div
            name="contact"
            className="Navbar-selection"
            onClick={this.handleClick}
          >
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
