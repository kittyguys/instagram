import React from "react";
import styled from "styled-components";
import HeaderInner from "./HeaderInner";

const HeaderWrap = styled.div`
  &::before {
    background-color: rgba(0, 0, 0, 0.0975);
    bottom: -1px;
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    right: 0;
  }

  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  font-weight: 600;
  width: 320px;
  position: fixed;
  left: 50%;
  top: 50px;
  transform: translate(-50%, 0);
  z-index: 1;
  flex-direction: column;
`;

export default class Header extends React.Component {
  render() {
    return (
      <HeaderWrap>
        <HeaderInner />
      </HeaderWrap>
    );
  }
}
