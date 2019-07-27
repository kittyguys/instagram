import React from "react";
import Header from "../Header";
import FooterContainer from "../../containers/FooterContainer";
import Timeline from "../../containers/TimelineContainer";

export default class Top extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Timeline />
        <FooterContainer />
      </>
    );
  }
}
