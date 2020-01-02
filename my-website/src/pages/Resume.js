import React, { Component } from "react";

export class Resume extends Component {
  componentDidMount = () => {
    // add bottom border to appropriate link on nav bar
    document.getElementsByName("resume")[0].classList.add("selected");
  };

  render() {
    return <p>This is the Resume page</p>;
  }
}
