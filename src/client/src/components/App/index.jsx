import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Top from "../Top/";
import PrivateRoute from "../../utils/PrivateRoute";
import Detail from "../../containers/DetailContainer";
import SignUp from "../../containers/SignUpContainer";

const App = () => (
  <Router>
    <PrivateRoute exact path="/" component={Top} />
    <Route path="/signup" component={SignUp} />
    <Route path="/create/details" component={Detail} />
  </Router>
);

export default App;
