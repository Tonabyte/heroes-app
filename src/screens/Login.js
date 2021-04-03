import React from 'react';
import { withStyles, Grid, Typography, Button } from '@material-ui/core';

// Styles
import Styles from './marvelStyles';

const Login = ({classes, history}) => {
  const navigateToRoot = () => history.replace("/");

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            Login
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Button color="primary" variant="outlined" fullWidth onClick={navigateToRoot}>
            Log In
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(Styles)(Login);
