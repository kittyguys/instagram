import React from "react";
import Header from "../../organisms/Header";
import FooterContainer from "../../organisms/Footer/FooterContainer";
import axios from "axios";

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
