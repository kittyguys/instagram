import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Top from "../Top/";
import PrivateRoute from "../../utils/PrivateRoute";
import Detail from "../../containers/DetailContainer";
import SignUp from "../../containers/SignUpContainer";
import Profile from "../../containers/ProfileContainer";
import ProfileEdit from "../../containers/ProfileEditContainer";
import Explore from "../../containers/ExploreContainer";
import OtherProfile from "../../containers/OtherProfileContainer";

const App = () => (
  <Router>
    <PrivateRoute exact path="/" component={Top} />
    <Route path="/signup" component={SignUp} />
    <Route path="/create/details" component={Detail} />
    <PrivateRoute path="/profile" component={Profile} />
    <PrivateRoute path="/profileedit" component={ProfileEdit} />
    <PrivateRoute exact path="/explore" component={Explore} />
    <Route path="/explore/profile" component={OtherProfile} />
  </Router>
);

export default App;
