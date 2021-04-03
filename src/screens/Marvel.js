import React from 'react';
import { withStyles, Grid, Typography } from '@material-ui/core';

// Components
import HerosList from '../components/list/heroesList';

// Styles
import Styles from './marvelStyles';

const Marvel = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            Marvel
          </Typography>
        </Grid>
        <HerosList publisher="Marvel Comics"/>
      </Grid>
    </div>
  );
};

export default withStyles(Styles)(Marvel);
