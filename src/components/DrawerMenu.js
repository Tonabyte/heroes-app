import React from 'react'
import { SwipeableDrawer } from '@material-ui/core';
import PropTypes from 'prop-types';

// Components
import MenuList from './MenuList';

const DrawerMenu = ({isOpen, toggleDrawer}) => {
  return (
    <div>
      <SwipeableDrawer
        anchor="left"
        open={isOpen}
        onOpen={() => toggleDrawer(true)}
        onClose={() => toggleDrawer(false)}
      >
        <div
            tabIndex={0}
            role="button"
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
          >
            <MenuList />
          </div>
      </SwipeableDrawer>
    </div>
  );
};

DrawerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default DrawerMenu;
