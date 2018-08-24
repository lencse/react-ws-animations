import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './routes/search';
import Watch from './routes/watch';
import Whale from './routes/whale';
import './App.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default () => (
  <Router>
    <Route render={({location}) => (
          <TransitionGroup>
          <CSSTransition
            classNames="route"
            timeout={800}
            key={location.key}
          >
            <Switch location={location}>
              <Route path="/whale" component={Whale} />
              <Route path="/watch/:id" component={Watch} />
              <Route component={Search} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
    )} />

  </Router>
);
