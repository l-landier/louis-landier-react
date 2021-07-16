import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Home } from './components/home.jsx';
import { Creation } from './components/creation.jsx';
import { Footer } from 'atomic';

export const CustomRouter = () => (
  <Router>
    <Switch>
      <div className="white-bg">
        <Route path="/">
          <Home />
        </Route>
        <Route path="/creation">
          <Creation />
        </Route>
      </div>
      <Footer />
    </Switch>
  </Router>
);
