import React from "react";
import Header from "../../organisms/Header";
import FooterContainer from "../../organisms/Footer/FooterContainer";

export default class Top extends React.Component {
  render() {
    return (
      <>
        {/*!this.props.isLoggedIn && this.props.history.push("/login")*/}
        <Header />
        <FooterContainer />
      </>
    );
  }
}
