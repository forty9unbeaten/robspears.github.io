import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import "./Contact.css";

export class Contact extends Component {
  componentDidMount = () => {
    // add bottom border to appropriate link on nav bar
    document.getElementsByName("contact")[0].classList.add("selected");
  };

  render() {
    return (
      <div id="Contact-container">
        <div id="Contact-social">
          <a
            href="https://www.linkedin.com/in/robsp3ars"
            alt="LinkedIn"
            title="LinkedIn"
          >
            <Icon name="linkedin" size="huge" className="socialIcon" />
          </a>
          <a
            href="https://www.gitlab.com/robsp3ars"
            alt="GitLab"
            title="GitLab"
          >
            <Icon name="gitlab" size="huge" className="socialIcon" />
          </a>
          <a
            href="https://github.com/forty9unbeaten"
            alt="GitHub"
            title="GitHub"
          >
            <Icon name="github" size="huge" className="socialIcon" />
          </a>
        </div>
        <p id="Contact-phone" alt="3179419088" title="Phone: (317) 941-9088">
          Phone: (317) 941-9088
        </p>
        <p id="Contact-email">
          Send an email to Rob at{" "}
          <a href="mailto: rob.sp3ars@gmail.com">rob.sp3ars@gmail.com</a>
        </p>
      </div>
    );
  }
}
