import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import WatchMovie from './screens/WatchMovie';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import App from './screens/App';

const Routes = () => (
  <Router>
    <Switch>
      <Route component={App}>
        <Route exact path="/" component={Home} />
        <Route path="/movie" component={WatchMovie} />
      </Route>
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
