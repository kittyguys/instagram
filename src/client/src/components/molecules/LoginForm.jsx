import React from "react";
import styled from "styled-components";
import LoginFormItem from "../atoms/LoginFormItem";

const LoginFormBlock = styled.div``;

export default class LoginForm extends React.Component {
  render() {
    return (
      <LoginFormBlock>
        <LoginFormItem />
        <LoginFormItem />
      </LoginFormBlock>
    );
  }
}
