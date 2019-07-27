import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

const FollowingBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-basis: 20%;
  flex-Followingion: row;
`;
const FollowingBtnIcon = styled.span`
  display: block;
  background-image: url(/images/icons2.png);
  background-repeat: no-repeat;
  background-size: 337px 298px;
  background-position: -263px 0px;
  height: 24px;
  width: 24px;
`;

export default class FollowingBtn extends React.Component {
  render() {
    return (
      <FollowingBtnWrap>
        <FollowingBtnIcon />
      </FollowingBtnWrap>
    );
  }
}
