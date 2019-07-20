import { connect } from "react-redux";
import { exploreStart } from "../actions/explore";
import Explore from "../components/Explore";

const mapStateToProps = state => ({
  userList: state.explore.userList
});

const mapDispatchToProps = dispatch => ({
  exploreStart: text => dispatch(exploreStart(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore);
