import React from "react";
import axios from "axios";
import LoginForm from './LoginForm';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errMessage: false
    };
  }

  async login(values) {
    const data = {
      id: values.uid,
      password: values.upass
    };
    await new Promise(resolve =>
      axios
        .post(`${process.env.API_PATH}/users/login`, data)
        .then(response => {
          if (response.data.user) {
            this.props.login(
              response.data.user.id,
              response.data.user.password,
              response.data.token
            );
            localStorage.setItem("token", response.data.token);
          } else {
            this.setState({ errMessage: true });
          }
          resolve();
        })
        .catch(error => {
          this.setState({ errMessage: true });
        })
    );
  }

  render() {
    return (
      <LoginForm onSubmit={values => this.login(values)} errMessage={this.state.errMessage} />
    );
  }
}
