import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root} >
      <AppBar class = "AppBar">
        <Toolbar >

          <Typography variant="h5" id='app-title' color="inherit" className={classes.grow}>
            {props.title}
          </Typography>
          <Button color="inherit">About</Button>
          <Button color="inherit">Blog</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);