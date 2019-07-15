import React from "react";
import styled from "styled-components";
import FooterInner from "./FooterInner";

const FooterWrap = styled.div`
  &::before {
    background: rgba(0, 0, 0, 0.0975);
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    right: 0;
    top: -1px;
  }

  background-color: #fff;
  border: 0;
  width: 320px;
  height: 44px;
  position: fixed;
  left: 50%;
  top: 574px;
  transform: translate(-50%, 0);
  user-select: none;
  z-index: 10;
`;

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <FooterWrap>
          <FooterInner />
        </FooterWrap>
      </>
    );
  }
}
