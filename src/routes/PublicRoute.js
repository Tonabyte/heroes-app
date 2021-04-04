import React from 'react';

import { Redirect, Route} from 'react-router-dom';

const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      component={props => (
        !isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      )}
      {...rest}
    />
  );
};

export default PublicRoute;
