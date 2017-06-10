import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import NotFound from './screens/NotFound';
// import WatchMovie from './screens/WatchMovie';
import App from './screens/App';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
