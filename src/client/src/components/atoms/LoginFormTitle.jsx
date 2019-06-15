import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  background-image: url(../images/icons.png);
  background-repeat: no-repeat;
  background-size: 520px auto;
  background-position: -152px -116px;
  height: 51px;
  width: 175px;
  margin: 22px auto 36px;
`;

export default class LoginFormTitle extends React.Component {
  render() {
    return <Title />;
  }
}
