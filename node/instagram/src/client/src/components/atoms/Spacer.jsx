import React from "react";
import styled from "styled-components";

const SpacerWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-basis: 20%;
  flex-Followingion: row;
`;
const SpacerIcon = styled.span`
  display: block;
  height: 24px;
  width: 24px;
`;

export default class Spacer extends React.Component {
  render() {
    return (
      <SpacerWrap>
        <SpacerIcon />
      </SpacerWrap>
    );
  }
}
