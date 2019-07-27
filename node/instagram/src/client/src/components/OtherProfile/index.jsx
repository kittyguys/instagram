import React from "react";
import styled from "styled-components";
import OtherProfileHeader from "../Header/OtherProfileHeader.jsx";
import OtherProfileMain from "./OtherProfileMain";
import OtherProfileStatus from "./OtherProfileStatus";
import OtherProfileMenu from "./OtherProfileMenu";
import FooterContainer from "../../containers/FooterContainer";
import OtherProfileContent from "./OtherProfileContent";

export default class OtherProfile extends React.Component {
  componentDidMount() {
    this.props.fetchOtherUserStart(this.props.location.state._id);
  }
  render() {
    return (
      <div>
        <OtherProfileHeader {...this.props} />
        <OtherProfileMain {...this.props} />
        <OtherProfileStatus {...this.props} />
        <OtherProfileMenu {...this.props} />
        <OtherProfileContent {...this.props} />
        <FooterContainer />
      </div>
    );
  }
}
