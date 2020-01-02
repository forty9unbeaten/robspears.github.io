import React, { Component } from "react";

export class Portfolio extends Component {
  componentDidMount = () => {
    // add bottom border to appropriate link on nav bar
    document.getElementsByName("portfolio")[0].classList.add("selected");
  };
  render() {
    return <p>This is the Portfolio page</p>;
  }
}
