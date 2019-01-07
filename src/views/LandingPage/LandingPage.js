import React, {Component} from "react";
import ProfileCard from "views/LandingPage/sections/ProfileCard.js";
import AboutCard from "views/LandingPage/sections/AboutCard.js";
import InfoTabs from "views/LandingPage/sections/InfoTabs.js";
import {withStyles, Grid} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";



const styles = theme =>({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  divider: {
    padding: "5px",
    margin: "15px",

  }
});

class LandingPage extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className="App">
        <Grid container position="relative" spacing="16" justify="center">
          <Grid item xs="8" sm="5" lg="3">
            <ProfileCard />
          </Grid>
          <Grid item xs="8" sm="5" lg="3">
            <AboutCard />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs="4" lg="3">
            <Divider variant="middle" className={classes.divider} />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs="8" sm="5" lg="4">
            <InfoTabs />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
