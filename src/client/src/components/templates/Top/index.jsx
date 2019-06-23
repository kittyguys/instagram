import React from "react";
import styled from "styled-components";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";

export default class Top extends React.Component {
  render() {
    return (
      <>
        {/*!this.props.isLoggedIn && this.props.history.push("/login")*/}
        <Header />
        <Footer />
      </>
    );
  }
}
