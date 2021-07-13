import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import { Dashboard } from './dashboard/Dashboard';
import { Home } from './components/home.jsx';

export const CustomRouter = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);
