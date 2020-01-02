import React, { Component } from "react";

export class Home extends Component {
  componentDidMount = () => {
    // add bottom border to appropriate link on nav bar
    document.getElementsByName("home")[0].classList.add("selected");
  };

  render() {
    return <p>This is the Home page</p>;
  }
}
