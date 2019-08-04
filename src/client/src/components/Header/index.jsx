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
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  flex-direction: column;
  z-index: 10;
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
