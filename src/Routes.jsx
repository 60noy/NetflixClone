import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import WatchMovie from './screens/WatchMovie';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import App from './screens/App';

const Routes = () => (
  <div>
    <Router component={App}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie" component={WatchMovie} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </div>
);

export default Routes;
