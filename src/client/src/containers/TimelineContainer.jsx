import { connect } from "react-redux";
import Timeline from "../components/Timeline";
import { fetchTimelineStart } from "../actions/timeline";

const mapStateToProps = state => ({
  //uid: state.
  photoList: state.timeline.photoList
});

const mapDispatchToProps = dispatch => ({
  fetchTimelineStart: () => dispatch(fetchTimelineStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);
