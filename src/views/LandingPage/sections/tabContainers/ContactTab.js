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
  grid: {
   marginBottom: 50,
   marginTop: 50,
  }
};

class ContactTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Title: '',
      Message: ''
    };
    this.submitClick = this.submitClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  submitClick(event){
    console.log(this.state.Message);
  }
  handleChange(event){
   this.setState({[event.target.id]: event.target.value});
  }
  render() {
    const {classes} = this.props;
    return (
      <Card className={classes.card}>
        <MuiThemeProvider theme={theme}>
          <Grid container spacing={16} direction= "column" alignItems="center" className={classes.grid}>
          <Grid item >
          <img
          src="assets/img/test-b.ico"
          height="60px"
          alt='JK Icon'
        />
          </Grid>
            <Grid item >
              <TextField
              type="text"
                id="Email"
                label="Email"
                name="Email"
                value={this.state.Email}
              onChange={this.handleChange}
              />
            </Grid>
            <Grid item>
              <TextField
                type="text"
                id="Title"
                label="Title"
                name="Title"
                value={this.state.Title}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item>
              <TextField
                type="text"
                id="Message"
                label="Message"
                name="Message"
                value={this.state.Message}
                onChange={this.handleChange}
                multiline="true"
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


ContactTab.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactTab);
