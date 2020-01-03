import React, { Component } from "react";
import './PortfolioItem.css'

export class PortfolioItem extends Component {
  render() {
    return (
      <li className='PortItem-project'>
        <a href={this.props.link} title={this.props.projectName}>
          {this.props.projectName}
        </a>
        <ul>
          <li>{this.props.description}</li>
        </ul>
      </li>
    );
  }
}
