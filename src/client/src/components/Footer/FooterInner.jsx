import React from "react";
import styled from "styled-components";
import HomeBtn from "../atoms/HomeBtn";
import ExploreBtn from "../atoms/ExploreBtn";
import UploadBtn from "../atoms/UploadBtn";
import ActivityBtn from "../atoms/ActivityBtn";
import ProfileBtn from "../atoms/ProfileBtn";

const FooterItem = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export default class FooterInner extends React.Component {
  render() {
    return (
      <FooterItem>
        <HomeBtn />
        <ExploreBtn />
        <UploadBtn />
        <ActivityBtn />
        <ProfileBtn />
      </FooterItem>
    );
  }
}