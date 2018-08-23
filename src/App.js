import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './routes/search';
import Watch from './routes/watch';
import './App.css';

export default () => (
  <Router>
    <Switch>
      <Route path="/watch/:id" component={Watch} />
      <Route component={Search} />
    </Switch>
  </Router>
);
