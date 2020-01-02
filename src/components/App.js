import React, { Component } from "react";
import { Navbar } from ".";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "../routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Robert Spears</h1>
        <BrowserRouter>
          <Navbar />
          <div id="App-container">
            <Switch>
              {routes.map(route => {
                return (
                  <Route exact path={route.path} component={route.component} />
                );
              })}
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;