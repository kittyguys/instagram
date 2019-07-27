import { connect } from "react-redux";
import SignUp from "../components/Signup";
import { signUpStart } from "../actions/signUp";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  signUpStart: values => dispatch(signUpStart(values))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
