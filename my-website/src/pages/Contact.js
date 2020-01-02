import React, { Component } from "react";

export class Contact extends Component {
  componentDidMount = () => {
    // add bottom border to appropriate link on nav bar
    document.getElementsByName("contact")[0].classList.add("selected");
  };

  render() {
    return <p>This is the Contact page</p>;
  }
}
