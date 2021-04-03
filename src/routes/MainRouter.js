import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Screens
import Login from '../screens/Login';

// Routers
import HeroesRouter from './HeroesRouter';

const MainRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={HeroesRouter} />
        </Switch>
      </div>
    </Router>
  );
}

export default MainRouter;
