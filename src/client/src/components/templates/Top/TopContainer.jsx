import { connect } from "react-redux";
import Top from "./";

const mapStateToProps = state => {
  return {
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
)(Top);
