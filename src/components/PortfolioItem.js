import React, { Component } from "react";
import "./PortfolioItem.css";

export class PortfolioItem extends Component {
  render() {
    const { screenshot, projectName, link } = this.props;
    return (
      <div className="Portcard">
        <div
          className="Portcard-image"
          style={{ backgroundImage: `url(${screenshot})` }}
        />
        <a
          href={link}
          title={projectName}
          alt={projectName}
          target="_blank"
          rel="noopener noreferrer"
        >
          {projectName}
        </a>
      </div>
    );
  }
}
