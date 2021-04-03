import React from 'react';

import {
  ListItem,
  withStyles,
  List,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Phone, Search, Radio } from '@material-ui/icons';

import { NavLink } from 'react-router-dom';

// Styles
import Styles from './menuListStyles';

const MenuList = ({classes}) => {
  return (
    <div className={classes.root}>
      <List>
        <NavLink exact to="/marvel">
          <ListItem button>
            <ListItemText>Marvel</ListItemText>
            <ListItemIcon><Phone /></ListItemIcon>
          </ListItem>
        </NavLink>
        <NavLink exact to="/dccomics">
          <ListItem button>
            <ListItemText>DC Comics</ListItemText>
            <ListItemIcon><Radio /></ListItemIcon>
          </ListItem>
        </NavLink>
        <NavLink exact to="/search">
          <ListItem button>
            <ListItemText>Search</ListItemText>
            <ListItemIcon><Search /></ListItemIcon>
          </ListItem>
        </NavLink>
      </List>
    </div>
  );
};

export default withStyles(Styles)(MenuList);
