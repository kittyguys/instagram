import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginContainer from "../components/organisms/Login/LoginContainer";
import TopContainer from "../components/templates/Top/TopContainer";
// import Register from "./Register";

const App = () => (
  <Router>
    <Route exact path="/" component={TopContainer} />
    <Route path="/login" component={LoginContainer} />
    {/* <Route path="/register" component={Register} /> */}
  </Router>
);

export default App;
