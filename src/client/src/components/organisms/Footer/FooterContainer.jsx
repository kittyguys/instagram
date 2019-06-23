import { connect } from "react-redux";
import Footer from "./";

const mapStateToProps = state => {
  return {
    uid: state.uid,
    upass: state.upass,
    isLoggedIn: state.isLoggedIn
  };
};

// const mapDispatchToProps = dispatch => ({
//   login: (uid, upass) => dispatch(login(uid, upass))
// });

export default connect(
  mapStateToProps,
  null
  //mapDispatchToProps
)(Footer);