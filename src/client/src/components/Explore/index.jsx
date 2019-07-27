import React from "react";
import styled from "styled-components";
import ExploreInput from "./ExploreInput";
import ExploreContents from "./ExploreContents";
import FooterContainer from "../../containers/FooterContainer";

export default class Explore extends React.Component {
  render() {
    return (
      <div>
        <ExploreInput {...this.props} />
        <ExploreContents {...this.props} />
        <FooterContainer />
      </div>
    );
  }
}
