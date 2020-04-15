import React, { Component } from "react";
import { Tab, Icon, Button } from "semantic-ui-react";
import "./Resume.css";

export class Resume extends Component {
  componentDidMount = () => {
    // add bottom border to appropriate link on nav bar
    document.getElementsByName("resume")[0].classList.add("selected");
  };

  render() {
    const tabPanes = [
      {
        menuItem: "Work Experience",
        render: () => (
          <Tab.Pane>
            <h3 className="sectionHeader">Best Buy Inc. (2019 - Present)</h3>
            <h4>Inventory Specialist</h4>
            <ul>
              <li>
                Fulfill all online orders assuring they are either ready for
                customer pickup or shipped from store to desired address
              </li>
              <li>
                Confirm accuracy of all inbound and outbound product transfers
                and manifests
              </li>
              <li>
                Assure all physical inventory is accounted for and easily
                accessible at all times
              </li>
            </ul>
            <h3 className="sectionHeader">
              Landscapes Unlimited (2017 - 2019)
            </h3>
            <h4>Maintenance Foreman</h4>
            <ul>
              <li>
                Maintaining and managing custom residential projects and
                designs.
              </li>
              <li>
                Communicating directly with customers ensuring that service
                expectations are exceeded.
              </li>
              <li>
                Managing a team of 3-5 employees assuring that individual
                responsibilities are clearly communicated, understood and
                executed.
              </li>
            </ul>
            <h3 className="sectionHeader">
              Capital Group Companies (2013 - 2017)
            </h3>
            <h4>Advisor Marketing Specialist</h4>
            <ul>
              <li>
                Educating financial advisors and retail investment clients about
                proprietary financial products and services.
              </li>
              <li>
                Assisting advisors and other financial professionals with sales
                presentations and client meeting preparation.
              </li>
              <li>
                Contributing to overall company sales and revenue alongside area
                sales representatives.
              </li>
            </ul>
          </Tab.Pane>
        ),
      },
      {
        menuItem: "Education",
        render: () => (
          <Tab.Pane>
            <h3 className="sectionHeader">
              Butler University (2019 - Present)
            </h3>
            <ul>
              <li>
                <h4>Full Stack Engineering Certificate</h4>
              </li>
              <li>
                <h4>Front-End Web Development Certificate</h4>
              </li>
              <ul>
                <li>
                  Technical certificates obtained through{" "}
                  <a
                    href="https://www.kenzie.academy/software-engineering"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Check Out Kenzie Academy"
                  >
                    Kenzie Academy
                  </a>
                </li>
              </ul>
            </ul>
            <h3 className="sectionHeader">
              Ivy Tech Community College (2017 - 2019)
            </h3>
            <ul>
              <li>
                <h4>AAS Software Development</h4>
              </li>
              <li>
                <h4>Technical Certificates</h4>
              </li>
              <ul>
                <li>Web Development Foundation</li>
                <li>Web Application Development</li>
              </ul>
            </ul>
          </Tab.Pane>
        ),
      },
      {
        menuItem: "Technical Skills",
        render: () => (
          <Tab.Pane>
            <div className="buttonContainer">
              <Button
                style={{ color: "white", backgroundColor: "maroon" }}
                animated="fade"
              >
                <Button.Content visible>
                  <Icon name="react" size="big" />
                </Button.Content>
                <Button.Content hidden>React.js</Button.Content>
              </Button>
              <Button
                style={{ color: "white", backgroundColor: "maroon" }}
                animated="fade"
              >
                <Button.Content visible>
                  <Icon name="js" size="big" />
                </Button.Content>
                <Button.Content hidden>Javascript</Button.Content>
              </Button>
              <Button
                style={{ color: "white", backgroundColor: "maroon" }}
                animated="fade"
              >
                <Button.Content visible>
                  <Icon name="html5" size="big" />
                </Button.Content>
                <Button.Content hidden>HTML5</Button.Content>
              </Button>
            </div>
            <div className="buttonContainer">
              <Button
                style={{ color: "white", backgroundColor: "maroon" }}
                animated="fade"
              >
                <Button.Content visible>
                  <Icon name="node" size="big" />
                </Button.Content>
                <Button.Content hidden>Node.js</Button.Content>
              </Button>
              <Button
                style={{
                  color: "white",
                  backgroundColor: "maroon",
                }}
                animated="fade"
              >
                <Button.Content visible>
                  <Icon className="big icon">
                    <div id="reduxLogo" />
                  </Icon>
                </Button.Content>
                <Button.Content hidden>Redux</Button.Content>
              </Button>
              <Button
                style={{
                  color: "white",
                  backgroundColor: "maroon",
                }}
                animated="fade"
              >
                <Button.Content visible>
                  <Icon name="git" size="big" />
                </Button.Content>
                <Button.Content hidden>Git</Button.Content>
              </Button>
            </div>
            <div className="buttonContainer">
              <Button
                style={{
                  color: "white",
                  backgroundColor: "maroon",
                }}
                animated="fade"
              >
                <Button.Content visible>
                  <Icon name="css3" size="big" />
                </Button.Content>
                <Button.Content hidden>CSS3</Button.Content>
              </Button>
              <Button
                style={{
                  color: "white",
                  backgroundColor: "maroon",
                }}
                animated="fade"
              >
                <Button.Content visible>
                  <Icon name="python" size="big" />
                </Button.Content>
                <Button.Content hidden>Python</Button.Content>
              </Button>
            </div>
          </Tab.Pane>
        ),
      },
    ];

    return (
      <div id="Resume-container">
        <Tab
          className="Resume-tabSpace"
          menu={{ vertical: true, fluid: true }}
          panes={tabPanes}
        />
      </div>
    );
  }
}
