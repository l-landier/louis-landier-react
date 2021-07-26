import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Home } from './components/home.jsx';
import { Creation } from './components/creation.jsx';
import { NoMatch } from './components/noMatch.jsx';
import { Footer } from 'atomic';

export const CustomRouter = () => (
  <Router>
    <Switch>
      <div className="white-bg">
        <Route exact path="/" component={Home} />
        <Route path="/creation" component={Creation} />
        {/*
        <Route path="*" component={NoMatch} />
        */}
        <Footer />
      </div>
    </Switch>
  </Router>
);
