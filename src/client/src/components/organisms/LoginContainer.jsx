import React from "react";
import styled from "styled-components";
import axios from "axios";
import LoginForm from "../molecules/LoginForm";
import LoginFormSubmit from "../atoms/LoginFormSubmit";
import LoginFormTitle from "../atoms/LoginFormTitle";
import RegistLink from "../atoms/RegistLink";

const LoginFormWrap = styled.div`
  color: #262626;
  flex-grow: 1;
  justify-content: center;
  margin-top: 12px;
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
  font-size: 14px;
  line-height: 18px;
  padding: 10px;
  box-sizing: border-box;
`;

const LoginFormBox = styled.div`
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 1px;
  margin: 0 0 10px;
  padding: 10px 0;
`;

export default class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: "",
      upass: ""
    };

    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.checkAuth = this.checkAuth.bind(this);
  }

  handleChangeId(event) {
    this.setState({ uid: event.target.value });
  }

  handleChangePass(event) {
    this.setState({ upass: event.target.value });
  }

  checkAuth(uid, upass) {
    const data = {
      id: uid,
      password: upass
    };

    axios
      .post(`${process.env.API_PATH}/api/login`, data)
      .then(val => {
        this.props.setUid(val.data.id);
      })
      .catch(error => {
        //this.props.setUid()
      });
  }

  render() {
    return (
      <LoginFormWrap>
        <LoginFormBox>
          <LoginFormTitle />
          <LoginForm />
          <LoginFormSubmit />
        </LoginFormBox>
        <LoginFormBox>
          <RegistLink />
        </LoginFormBox>
      </LoginFormWrap>
    );
  }
}
