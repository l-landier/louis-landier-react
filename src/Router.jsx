import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Home } from './components/home.jsx';

export const CustomRouter = () => (
  <Router>
    <div className="white-bg">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <footer>
        <p className="margin-top-md text-align-center padding-xs">
          © 2021 LOUIS LANDIER | Tous droits réservés.
        </p>
      </footer>
    </div>
  </Router>
);
