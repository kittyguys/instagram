import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Top from "../components/templates/Top/";
import PrivateRoute from "../utils/PrivateRoute";
import SignUp from "../components/organisms/SignUp";

const App = () => (
  <Router>
    <PrivateRoute exact path="/" component={Top} />
    <Route path="/signup" component={SignUp} />
  </Router>
);

export default App;
