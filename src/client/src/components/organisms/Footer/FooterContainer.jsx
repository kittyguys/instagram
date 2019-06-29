//import { selectPhoto } from "../../../redux/actionCreators/login";
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
//   selectPhoto: () => dispatch(selectPhoto())
// });

export default connect(
  mapStateToProps,
  null
  //mapDispatchToProps
)(Footer);
