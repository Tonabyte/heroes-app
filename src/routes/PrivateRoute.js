import React from 'react';

import { Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  localStorage.setItem('lastVisitedPath', rest.location.pathname);
  return (
    <Route
      component={props => (
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      )}
      {...rest}
    />
  );
};

export default PrivateRoute;
