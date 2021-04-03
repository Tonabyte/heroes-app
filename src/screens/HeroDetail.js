import React, { useMemo } from 'react';
import { withStyles, Grid, Typography, CardMedia, Button, Paper, Divider, Slide } from '@material-ui/core';

import { useParams, Redirect } from 'react-router-dom';

// Utils
import Handler from '../utils/Handler';
import GetImage from '../utils/GetImage';

// Styles
import Styles from './heroDetailStyles';

const HeroDetail = ({ classes, history }) => {
  const { heroId } = useParams();
  const hero = useMemo(() => Handler.getHeroById(heroId), [heroId]);

  if (!hero) {
    return <Redirect to="/" />
  }

  const handleReturn = () => history.length <= 2 ? history.push('/') : history.goBack();

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Slide in direction="right" timeout={600}>
        <Grid item xs={3}>
          <CardMedia image={GetImage(hero.id)} title={hero.id} className={classes.media}/>
        </Grid>
        </Slide>
        <Slide in direction="right" timeout={600}>
        <Grid item xs={3} className={classes.description}>
          <Paper elevation={5} className={classes.paper}>
            <Typography variant="h4">{hero.superhero}</Typography>
            <Divider />
            <Typography variant="h6" >{hero.alter_ego}</Typography>
            <Typography variant="body2">{hero.first_appearance}</Typography>
            <Button variant="contained" color="secondary" onClick={handleReturn}>Return</Button>
          </Paper>
        </Grid>
        </Slide>
      </Grid>
    </div>
  );
};

export default withStyles(Styles)(HeroDetail);
