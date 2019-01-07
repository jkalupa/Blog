import React from "react";
import {withStyles, MuiThemeProvider} from "@material-ui/core/styles";
import {Button, Typography, Toolbar, AppBar} from "@material-ui/core";

import theme from "components/theme.js";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  icon: {
    padding: "10px"
  }
};

function Header(props) {
  const {classes} = props;
  return (
    <div className={classes.root}>
    <MuiThemeProvider theme={theme}>
      <AppBar position="relative" color="primary">
        <Toolbar>
        <img
          src="assets/img/test-w.ico"
          height="40"
          className={classes.icon}
          alt='White JK Icon'
          onClick={iconClick}
        />
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {props.title}
          </Typography>
          <Button color="inherit" onClick={loginClick}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
    </div>
  );
}


function loginClick(e) {
      window.location.href = "/login";
}

function iconClick() {
    window.location.href = '/';
  }

export default withStyles(styles)(Header);
