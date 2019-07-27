import React from "react";
import styled from "styled-components";
import StoryBtn from "../atoms/StoryBtn";
import Logo from "../atoms/Logo";
import DirectMsgBtn from "../atoms/DirectMsgBtn";

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  justify-content: space-between;
  padding: 0 16px;
`;

export default class HeaderInner extends React.Component {
  render() {
    return (
      <HeaderItem>
        <StoryBtn />
        <Logo />
        <DirectMsgBtn />
      </HeaderItem>
    );
  }
}
