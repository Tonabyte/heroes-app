import React, { useState, useContext } from 'react';
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

 import { useHistory } from 'react-router-dom';

// Styles
import Styles from './navigationBarStyles';

// Components
import Menu from '../components/DrawerMenu';

// Context
import AuthContext from '../context/authContext';

// Store
import TYPES from '../store/actions/types';

const NavigationBar = ({classes}) => {
  const { user: { name }, dispatch } = useContext(AuthContext);
  const history = useHistory();
  const [isOpen, setstate] = useState(false);

  const toggleDrawer = state => setstate(state);

  const logout = () => {
    history.replace("/login");
    dispatch({ type: TYPES.LOGOUT });
  }
  
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
          <Typography>
            {name}
          </Typography>
          <Button color="inherit" onClick={logout}>Logout</Button>
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
