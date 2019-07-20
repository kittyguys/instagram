import { connect } from "react-redux";
import { exploreStart } from "../actions/explore";
import Explore from "../components/Explore";

const mapStateToProps = state => ({
  _id: state.login._id,
  userList: state.explore.userList
});

const mapDispatchToProps = dispatch => ({
  exploreStart: (searchText, _id) => dispatch(exploreStart(searchText, _id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore);
