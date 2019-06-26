import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Top from "../components/templates/Top/";
import PrivateRoute from "../utils/PrivateRoute";
import Register from "../components/organisms/Register";

const App = () => (
  <Router>
    <PrivateRoute exact path="/" component={Top} />
    <Route path="/register" component={Register} />
  </Router>
);

export default App;
