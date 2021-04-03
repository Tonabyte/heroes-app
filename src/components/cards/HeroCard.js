import React from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  withStyles,
  Grid,
  Typography
} from '@material-ui/core';

import { Link } from 'react-router-dom';

// Styles
import Styles from './heroCardStyles';

// Utils
import GetImage from '../../utils/GetImage';

const HeroCard = ({ data, classes }) => {
  return (
    <div>
      <Card className={classes.cardContainer}>
        <CardContent>
          <Grid container>
            <Grid item xs={6}>
              <CardMedia image={GetImage(data.id)} title={data.id} className={classes.media} />
            </Grid>
            <Grid item xs={6} className={classes.cardDescription}>
              <Typography variant="h5">{data.superhero}</Typography>
              <Typography variant="h6" >{data.alter_ego}</Typography>
              <Typography variant="body1">{data.first_appearance}</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button color="primary" variant="outlined"><Link to={`./hero/${data.id}`}>See more...</Link></Button>
        </CardActions>
      </Card>
    </div>
  );
};

HeroCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default withStyles(Styles)(HeroCard);
