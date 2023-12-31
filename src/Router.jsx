import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Home } from './components/home.jsx';
import { Creation } from './components/creation.jsx';
import { NoMatch } from './components/noMatch.jsx';

export const CustomRouter = () => (
  <Router>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/creation" component={Creation} />
        <Route path="*" component={NoMatch} />
    </Switch>
  </Router>
);
