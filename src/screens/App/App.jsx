// default screen with navbar
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Home from '../Home';
import NotFound from '../NotFound';
import WatchMovie from '../WatchMovie';

const App = () => (
  <div>
    <Navbar />
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/movie" component={WatchMovie} />
      <Route path="*" component={NotFound} />
    </Switch>
  </div>
);

export default App;
