import React, {Component} from "react";
import Header from "./components/header.js";
import ProfileCard from "./views/LandingPage/sections/ProfileCard.js";
import AboutCard from "./views/LandingPage/sections/AboutCard.js";
import {Button, withStyles, Grid, Paper} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";
import {createMuiTheme} from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  divider: {
    padding: "5px",
    margin: "5px",
    color: "purple"
  }
};

class LandingPage extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className="App">
        <Header />
        <Grid container position="relative" spacing="16" justify="center">
          <Grid item xs="8" sm="5" lg="3">
            <ProfileCard />
          </Grid>
          <Grid item xs="8" sm="5" lg="3">
            <AboutCard />
          </Grid>
        </Grid>
        <Grid container position="relative" spacing="16" justify="center">
          <Grid item xs="5">
            <Divider variant="middle" className={classes.divider} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
