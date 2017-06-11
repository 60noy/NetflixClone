import React from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import NotFound from './screens/NotFound';
import WatchMovie from './screens/WatchMovie';
import Home from './screens/Home';
import App from './screens/App';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/movie" component={WatchMovie} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
