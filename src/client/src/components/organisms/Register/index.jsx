import React from "react";
import styled from "styled-components";
import axios from "axios";
import RegisterForm from "./RegisterForm";

const ErrMessage = styled.p`
  color: #ed4956;
  margin: 0 40px 6px;
  text-align: center;
`;

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errMessage: false,
    }
  }

  async register(values) {
    const data = {
      id: values.uid,
      password: values.upass
    };
    await new Promise(resolve =>
      axios
        .post(`${process.env.API_PATH}/users/register`, data)
        .then(response => {
          if (response.data.userList) {
            alert('ユーザ登録が成功しました。')
            console.log(response.data.userList);
          } else {
            this.setState({ errMessage: true });
          }
          resolve();
        })
        .catch(error => {})
    );
  }

  submit(values) {
    console.log(values)
  }

  render() {
    return (
      <>
        <div>{this.state.errMessage && <ErrMessage>ユーザーネームまたはパスワードが無効です。</ErrMessage>}</div>
        <RegisterForm onSubmit={values => this.register(values)} />
      </>
    );
  }
}

