import React from "react";
import ReactDOM from "react-dom";

import 'core-js/stable';
import { CustomRouter } from './Router.jsx';

const App = () => (
  <>
    <CustomRouter />
  </>
);

ReactDOM.render(<App />, document.getElementById('louis-website'));
