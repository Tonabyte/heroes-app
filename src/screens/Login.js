import React, { useContext } from 'react';
import { withStyles, Grid, Typography, Button } from '@material-ui/core';

// Styles
import Styles from './marvelStyles';

// Store
import TYPES from '../store/actions/types';

// Context 
import AuthContext from '../context/authContext';

const Login = ({classes, history}) => {
  const { dispatch } = useContext(AuthContext);

  const loginUser = () => {
    const lastVisitedPath = localStorage.getItem('lastVisitedPath') || '/';
    const action = {
      type: TYPES.LOGIN,
      payload: {
        name: 'Tonatiuh',
      },
    };
    dispatch(action);
    history.replace(lastVisitedPath);
  }

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            Login
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Button color="primary" variant="outlined" fullWidth onClick={loginUser}>
            Log In
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(Styles)(Login);
