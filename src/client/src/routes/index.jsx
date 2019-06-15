import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import LoginContainer from "../components/organisms/LoginContainer";
// import Register from "./Register";

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={LoginContainer} />
    {/* <Route path="/about" component={About} />
    <Route path="/friends" component={Friends} />
    <Route path="/register" component={Register} /> */}
  </BrowserRouter>
);

export default App;
