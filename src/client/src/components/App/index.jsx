import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Top from "../Top/";
import PrivateRoute from "../../utils/PrivateRoute";
import SignUp from "../SignUp";
import Detail from "../Detail";

const App = () => (
  <Router>
    <PrivateRoute exact path="/" component={Top} />
    <Route path="/signup" component={SignUp} />
    <Route path="/create/details" component={Detail} />
  </Router>
);

export default App;
