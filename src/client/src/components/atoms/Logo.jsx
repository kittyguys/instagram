import React from "react";
import styled from "styled-components";

const LogoBox = styled.h1`
  align-items: center;
  color: #262626;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  min-width: 0;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const LogoInner = styled.span`
  display: block;
  background-image: url(../images/icons2.png);
  background-repeat: no-repeat;
  background-size: 337px 298px;
  background-position: -92px -71px;
  height: 29px;
  width: 103px;
`;

export default class Logo extends React.Component {
  render() {
    return (
      <LogoBox>
        <a href="/">
          <LogoInner />
        </a>
      </LogoBox>
    );
  }
}
