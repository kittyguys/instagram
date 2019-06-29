import React from "react";
import Header from "../Header";
import FooterContainer from "../../containers/FooterContainer";

export default class Top extends React.Component {
  render() {
    return (
      <>
        <Header />
        <FooterContainer />
      </>
    );
  }
}
