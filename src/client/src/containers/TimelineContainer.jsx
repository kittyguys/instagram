import { connect } from "react-redux";
import Timeline from "../components/Timeline";
import { fetchTimelineStart } from "../actions/timeline";

// const mapStateToProps = state => ({
//     _id: state.login._id
// });

const mapDispatchToProps = dispatch => ({
  fetchTimelineStart: () => dispatch(fetchTimelineStart())
});

export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
)(Timeline);
