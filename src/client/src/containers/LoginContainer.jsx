import { connect } from "react-redux";
import Login from "../components/Login";
import { loginStart } from "../actions/login";

const mapStateToProps = state => {
  return {
    uid: state.login.uid,
    upass: state.login.upass,
    isLoggedIn: state.login.isLoggedIn,
    errMessage: state.login.errMessage,
    token: state.login.token
  };
};

const mapDispatchToProps = dispatch => ({
  loginStart: values => dispatch(loginStart(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
