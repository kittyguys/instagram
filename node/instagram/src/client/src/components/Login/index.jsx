import React from "react";
import LoginForm from "../Form/LoginForm";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errMessage: false
    };
  }

  login(values) {
    console.log(values);
    this.props.loginStart(values);
  }

  render() {
    return (
      <LoginForm
        onSubmit={values => this.login(values)}
        errMessage={this.state.errMessage}
      />
    );
  }
}
