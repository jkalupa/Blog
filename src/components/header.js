import React from "react";
import {withStyles, MuiThemeProvider} from "@material-ui/core/styles";
import {Button, Typography, Toolbar, AppBar} from "@material-ui/core";

import theme from "./theme.js";

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
          alt='icon'
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
  e.preventDefault();
  document.write(
    "<h3>Login page under construction thank you for your patience</h3>"
  );
}

function iconClick() {
    window.location.href = 'http://kalupa.xyz';
  }

export default withStyles(styles)(Header);
