import React from "react";
import PropTypes from "prop-types";
import {withStyles, MuiThemeProvider} from "@material-ui/core/styles";
import {AppBar, Tabs, Tab, Typography, Paper} from "@material-ui/core";
import FollowTab from "./tabContainers/FollowTab.js";

import theme from "components/theme.js";

function TabContainer(props) {
  return (
    <Paper>
      <Typography component="div" style={{padding: 8 * 3}}>
        {props.children}
      </Typography>
    </Paper>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

class SimpleTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({value});
  };

  render() {
    const {classes} = this.props;
    const {value} = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs value={value} onChange={this.handleChange} centered>
              <Tab label="Follow" />
              <Tab label="Contact" />
            </Tabs>
          </AppBar>
          {value === 0 && <FollowTab />}
          {value === 1 && <TabContainer>Web Form under construction. Feel free to react out to me at johnekalupa@gmail.com in the meantime.</TabContainer>}
        </div>
      </MuiThemeProvider>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTabs);
