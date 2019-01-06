import React, {Component} from "react";
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage.js";

import "index.css";

class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
        </div>
      </Router>
    );
  }
}

export default App;
