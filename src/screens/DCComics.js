import React from 'react';
import { withStyles, Grid, Typography } from '@material-ui/core';

// Components
import HerosList from '../components/list/heroesList';

// Styles
import Styles from './marvelStyles';

const DCComics = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            DC
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <HerosList publisher="DC Comics"/>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(Styles)(DCComics);
