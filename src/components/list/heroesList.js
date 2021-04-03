import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Grid, Fade } from '@material-ui/core';

// Utils
import Handler from '../../utils/Handler';

// Components
import HeroCard from '../cards/HeroCard';

const HeroesList = ({ publisher }) => {
  const heroesResult = useMemo(() => Handler.getHeroesByPublisher(publisher), [publisher]);
  return (
    <Fade in timeout={1000}>
      <Grid container spacing={4}>
        {
          heroesResult.map((hero) => (
            <Grid item xs={4} key={hero.id}>
              <HeroCard data={hero} />
            </Grid>
          ))
        }
      </Grid>
    </Fade>
  );
};

HeroesList.propTypes = {
  publisher: PropTypes.string.isRequired,
};

export default HeroesList;
