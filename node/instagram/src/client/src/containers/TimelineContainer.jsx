import { connect } from "react-redux";
import Timeline from "../components/Timeline";
import { fetchTimelineStart } from "../actions/timeline";

const mapStateToProps = state => ({
  uid: state.login._id,
  id: state.login.id,
  photoList: state.timeline.photoList
});

const mapDispatchToProps = dispatch => ({
  fetchTimelineStart: _id => dispatch(fetchTimelineStart(_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);
