import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
 } from '@material-ui/core';
 import MenuIcon from '@material-ui/icons/Menu';

// Styles
import Styles from './navigationBarStyles';

// Components
import Menu from '../components/DrawerMenu';

const NavigationBar = ({classes}) => {
  const [isOpen, setstate] = useState(false);

  const toggleDrawer = state => setstate(state);
  
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu" onClick={() => setstate(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.iconContainer}>
            Heroes App
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <Menu isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </div>
  )
};

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(NavigationBar);
