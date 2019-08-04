import React from "react";
import styled from "styled-components";
import HomeBtn from "../atoms/HomeBtn";
import ExploreBtn from "../atoms/ExploreBtn";
import UploadBtn from "../atoms/UploadBtn";
import ActivityBtn from "../atoms/ActivityBtn";
import ProfileBtn from "../atoms/ProfileBtn";
import { Link } from "react-router-dom";

const FooterItem = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-around;
`;

export default class FooterInner extends React.Component {
  render() {
    return (
      <FooterItem>
        <Link to="/">
          <HomeBtn current={location.pathname === "/"} />
        </Link>
        <Link to="/explore">
          <ExploreBtn current={location.pathname === "/explore"} />
        </Link>
        <span>
          <UploadBtn />
        </span>
        <Link to="/activity">
          <ActivityBtn current={location.pathname === "/activity"} />
        </Link>
        <Link to="/profile">
          <ProfileBtn current={location.pathname === "/profile"} />
        </Link>
      </FooterItem>
    );
  }
}
