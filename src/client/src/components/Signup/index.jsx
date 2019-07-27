import React from "react";
import SignUpForm from "../Form/SignUpForm";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errMessage: false
    };
  }

  signUp(values) {
    this.props.signUpStart(values);
  }

  render() {
    return (
      <SignUpForm
        onSubmit={values => this.signUp(values)}
        errMessage={this.state.errMessage}
      />
    );
  }
}
