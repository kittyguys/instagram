import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Top from "../components/templates/Top/";
import PrivateRoute from "../utils/PrivateRoute";
<<<<<<< HEAD
import SignUp from "../components/organisms/SignUp";
=======
import Register from "../components/organisms/Register";
import Upload from "../components/organisms/Upload";
>>>>>>> master

const App = () => (
  <Router>
    <PrivateRoute exact path="/" component={Top} />
<<<<<<< HEAD
    <Route path="/signup" component={SignUp} />
=======
    <Route path="/register" component={Register} />
    <Route path="/creat/details" component={Upload} />
>>>>>>> master
  </Router>
);

export default App;
