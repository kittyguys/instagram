import { connect } from "react-redux";
import Profile from "../components/Profile";
import { fetchUserStart } from "../actions/profile";

const mapStateToProps = state => ({
    _id: state.login._id,
    id: state.profile.id,
    avater: state.profile.avater,
    photos: state.profile.photos,
    follow: state.profile.follow,
    follower: state.profile.follower
});

const mapDispatchToProps = dispatch => ({
    fetchUserStart: _id => dispatch(fetchUserStart(_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
