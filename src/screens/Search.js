import React, { useMemo } from 'react';
import { withStyles, Grid, Typography, TextField, Button, Paper } from '@material-ui/core';

import { useLocation } from 'react-router-dom';

import queryString from 'query-string';

// Components
import HeroCard from '../components/cards/HeroCard';

// Utils
import Handler from '../utils/Handler';

// Hooks
import useForm from '../hooks/useForm';

// Styles
import Styles from './searchStyles';

const Search = ({ classes, history }) => {
  const location = useLocation();
  const { q = ''} = queryString.parse(location.search);
  const [formState, handleInputChange] = useForm({ query: q});
  const { query } = formState;
  const filteredResults = useMemo(() => Handler.getHeroByName(q), [q]);
  let message = q === '' ? 'Search a hero in order to display results.'
    : q !== '' && !filteredResults.length? 'No results found.' : '';

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`?q=${query}`);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3" align="center">Search</Typography>
        </Grid>
        <Grid item xs={6}>
          <form onSubmit={e => handleSubmit(e)} className={classes.marginSearch}>
            <Typography variant="h4">Search Form</Typography>
            <TextField
              id="query"
              name="query"
              label="Enter your hero"
              value={query}
              onChange={e => handleInputChange(e)}
              margin="normal"
              fullWidth
            />
            <Button variant="outlined" color="primary" fullWidth type="submit">Accept</Button>
          </form>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4">Results</Typography>
            {
              (q === '' || (q !== '' && !filteredResults.length)) && (
                <Paper elevation={5}>{message}</Paper>
              )
            }
            {
              filteredResults.map(hero => (
                <div className={classes.marginCard} key={hero.id}>
                  <HeroCard data={hero} key={hero.id} />
                </div>
              ))
            }
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(Styles)(Search);
