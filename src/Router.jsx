import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Home } from './components/home.jsx';
import { Footer } from 'atomic';

export const CustomRouter = () => (
  <Router>
    <div className="white-bg">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  </Router>
);
