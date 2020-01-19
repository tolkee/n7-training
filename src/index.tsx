import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import SpellCheck from "./pages/SpellCheck";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/spellcheck" component={SpellCheck} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
