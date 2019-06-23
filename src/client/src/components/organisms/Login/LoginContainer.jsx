import { login } from "../../../redux/actionCreators/login";
import { connect } from "react-redux";
import Login from "./";

const mapStateToProps = state => {
  return {
    uid: state.login.uid,
    upass: state.login.upass,
    isLoggedIn: state.login.isLoggedIn,
    errMessage: state.login.errMessage
  };
};

const mapDispatchToProps = dispatch => ({
  login: (uid, upass) => dispatch(login(uid, upass))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
