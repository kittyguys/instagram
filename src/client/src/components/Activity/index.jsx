import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import Axios from "axios";
import Footer from "../../containers/FooterContainer";
import ActivityHeader from "../Header/ActivityHeader";
import LikeTL from "../../containers/LikeTimelineContainer";

class Activity extends React.Component {
  render() {
    return (
        <div>
            <ActivityHeader></ActivityHeader>
            <LikeTL></LikeTL>
            <Footer></Footer>
        </div>
    );
  }
}

export default withRouter(Activity);
