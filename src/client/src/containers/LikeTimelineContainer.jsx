import { connect } from "react-redux";
import LikeTimeline from "../components/LikeTL";
import { fetchLikeTimelineStart } from "../actions/likeTimeline";

const mapStateToProps = state => ({
  uid: state.login._id,
  id: state.login.id,
  photoList: state.likeTimeline.photoList,
  isLoading: state.likeTimeline.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchLikeTimelineStart: _id => dispatch(fetchLikeTimelineStart(_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeTimeline);
