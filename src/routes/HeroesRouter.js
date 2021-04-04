import React from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Screens
import Marvel from '../screens/Marvel';
import Search from '../screens/Search';
import DCComics from '../screens/DCComics';
import HeroDetail from '../screens/HeroDetail';

// Components
import NavigationBar from '../components/NavigationBar';

const HeroesRouter = ({ history }) => {
  return (
    <>
      <NavigationBar />
      <div>
        <Switch>
          <Route exact path="/marvel" component={Marvel} />
          <Route exact path="/dccomics" component={DCComics} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/hero/:heroId" component={HeroDetail} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
}

export default HeroesRouter;
