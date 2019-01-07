import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import {
  Card,
  TextField,
  Button,
  Grid,
  MuiThemeProvider
} from "@material-ui/core/";

import theme from "components/theme.js";

const styles = {
  card: {
    MaxWidth: 400,
    minHeight: 375
  },
  icon: {
    width: 100,
    height: 100,
  }
};

class LoginCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.submitClick = this.submitClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  submitClick(event){
    console.log(this.state.username);
  }
  handleChange(event){
   this.setState({[event.target.id]: event.target.value});
  }
  render() {
    const {classes} = this.props;
    return (
      <Card className={classes.card}>
        <MuiThemeProvider theme={theme}>
          <Grid container spacing={16} justify="center" direction= "column" alignItems="center">
            <Grid item>
              <img
                src="/assets/img/test-b.ico"
                alt="Black JK Icon"
                className={classes.icon}
              />
            </Grid>
            <Grid item>
              <TextField
              type="text"
                id="username"
                label="Username"
                name="username"
                value={this.state.username}
              onChange={this.handleChange}
              />
            </Grid>
            <Grid item>
              <TextField
                type="password"
                id="password"
                label="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" onClick={(event) => this.submitClick()}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </Card>
    );
  }
}


LoginCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginCard);
