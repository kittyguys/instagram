import { login } from "../../../redux/actionCreators";
import { connect } from "react-redux";
import Login from "./";

const mapStateToProps = state => {
  return {
    uid: state.uid,
    upass: state.upass,
    isLoggedIn: state.isLoggedIn,
    errMessage: state.errMessage
  };
};

const mapDispatchToProps = dispatch => ({
  login: (uid, upass) => dispatch(login(uid, upass))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
