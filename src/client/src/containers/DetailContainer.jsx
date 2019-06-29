import { connect } from "react-redux";
import Detail from "../components/Detail";

const mapStateToProps = state => {
  return {
    blobUrl: !!state.form.photo ? state.form.photo.values.blobUrl : ""
  };
};

// const mapDispatchToProps = dispatch => ({
//   login: (uid, upass, token) => dispatch(login(uid, upass, token))
// });

export default connect(
  mapStateToProps,
  null
  //mapDispatchToProps
)(Detail);
