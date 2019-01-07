import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Header from "components/header.js";
import "index.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;
