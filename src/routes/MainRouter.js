import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

// Screens
import Login from '../screens/Login';

// Routers
import HeroesRouter from './HeroesRouter';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// Context
import AuthContext from '../context/authContext';

const MainRouter = () => {
  const { user: { isLogged }} = useContext(AuthContext);
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute exact path="/login" component={Login} isAuthenticated={isLogged} />
          <PrivateRoute path="/" component={HeroesRouter} isAuthenticated={isLogged} />
        </Switch>
      </div>
    </Router>
  );
}

export default MainRouter;
