import { login } from "../../../redux/actionCreators/login";
import { connect } from "react-redux";
import Upload from "./";

const mapStateToProps = state => {
  return {
    uid: state.login.uid,
    upass: state.login.upass,
    isLoggedIn: state.login.isLoggedIn,
    errMessage: state.login.errMessage,
    token: state.login.token
  };
};

// const mapDispatchToProps = dispatch => ({
//   login: (uid, upass, token) => dispatch(login(uid, upass, token))
// });

export default connect(
  mapStateToProps,
  null
  //mapDispatchToProps
)(Upload);
