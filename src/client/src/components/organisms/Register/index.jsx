import React from "react";
import axios from "axios";
import RegisterForm from "./RegisterForm";

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
          } else {
            this.setState({ errMessage: true });
          }
          resolve();
        })
        .catch(error => {})
    );
  }

  render() {
    return (
      <RegisterForm onSubmit={values => this.register(values)} errMessage={this.state.errMessage} />
    );
  }
}
