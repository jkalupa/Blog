import React, {Component} from "react";
import LoginCard from "views/LoginPage/sections/LoginCard.js"
import {withStyles, Grid} from "@material-ui/core";

const styles = theme =>({
LoginCard: {
  marginTop: "100px",
}

});

class LoginPage extends Component {

  render() {
    const {classes} = this.props;
    return (
        <Grid container position="relative" spacing={16} justify="center" className={classes.LoginCard}>
          <Grid item xs={8} sm={5} lg={3}>
          <LoginCard />
          </Grid>
        </Grid>
    );
  }
}

export default withStyles(styles)(LoginPage);
