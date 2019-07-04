import { connect } from "react-redux";
import Footer from "../components/Footer";

const mapStateToProps = state => {
  return {
    uid: state.uid,
    upass: state.upass,
    isLoggedIn: state.isLoggedIn,
    // blobUrl: !!state.form.photo ? state.form.photo.values.blobUrl : ""
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
