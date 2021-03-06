import 'core-js/fn/array/find';
import 'core-js/fn/string/starts-with';
import 'core-js/fn/number/is-nan';
import 'core-js/fn/array/includes';

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";
import { unregister } from "./registerServiceWorker";

import "./index.css";

ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById("root")
);

unregister();

if (process.env.RAVEN_URL && window.Raven) {
  window.Raven.config(process.env.RAVEN_URL).install();
}
