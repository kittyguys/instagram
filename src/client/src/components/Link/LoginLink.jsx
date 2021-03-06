import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUpWrap = styled.div`
  color: #262626;
  margin: 15px;
  text-align: center;
`;

export default class SignUpLink extends React.Component {
  render() {
    return (
      <SignUpWrap>
        アカウントをお持ちですか？
        <br />
        <Link to="/">ログインする</Link>
      </SignUpWrap>
    );
  }
}
