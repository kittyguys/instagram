import { connect } from "react-redux";
import Activity from "../components/Activity";

const mapStateToProps = state => {
  return {
  };
};

// const mapDispatchToProps = dispatch => ({
//   login: (uid, upass, token) => dispatch(login(uid, upass, token))
// });

export default connect(
  mapStateToProps,
  null
  //mapDispatchToProps
)(Activity);
