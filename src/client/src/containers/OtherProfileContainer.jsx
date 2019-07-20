import { connect } from "react-redux";
import OtherProfile from "../components/OtherProfile";
import { fetchOtherUserStart, changeMenuOther } from "../actions/otherProfile";
import { followStart } from "../actions/follow";
import { unfollowStart } from "../actions/unfollow";

const mapStateToProps = state => ({
  _id: state.login._id,
  uid: state.otherProfile._id,
  id: state.otherProfile.id,
  avater: state.otherProfile.avater,
  photos: state.otherProfile.photos,
  follow: state.otherProfile.follow,
  follower: state.otherProfile.follower,
  selected: state.otherProfile.selected,
  photoList: state.otherProfile.photoList
});

const mapDispatchToProps = dispatch => ({
  fetchOtherUserStart: _id => dispatch(fetchOtherUserStart(_id)),
  changeMenuOther: selected => dispatch(changeMenuOther(selected)),
  followStart: (_id, uid) => dispatch(followStart(_id, uid)),
  unfollowStart: (_id, uid) => dispatch(unfollowStart(_id, uid))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OtherProfile);
