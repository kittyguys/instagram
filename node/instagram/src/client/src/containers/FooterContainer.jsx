import { connect } from "react-redux";
import Footer from "../components/Footer";

const mapStateToProps = state => {
  return {
    uid: state.uid,
    upass: state.upass,
    isLoggedIn: state.isLoggedIn
  };
};

// const mapDispatchToProps = dispatch => ({
// });

export default connect(
  mapStateToProps,
  null
  //mapDispatchToProps
)(Footer);
