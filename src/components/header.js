import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import theme from './theme.js'


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  icon:{
    padding: "10px",
  },
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    <MuiThemeProvider theme={theme}>
      <AppBar position='relative' color='primary'>
        <Toolbar >
          <img src='test-w.ico' height='40' className={classes.icon}/>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {props.title}
          </Typography>
          <Button color="inherit" onClick={loginClick}>Login</Button>
        </Toolbar>
      </AppBar>
      </MuiThemeProvider>
    </div>
  );
}

function loginClick(e){

  e.preventDefault();
   document.write('<h3>Login page under construction thank you for your patience</h3>');
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
