import { connect } from "react-redux";
import ProfileEdit from "../components/ProfileEdit";
import { profileEditStart } from "../actions/profileEdit";

const mapStateToProps = state => ({
    _id: state.login._id,
    id: state.profile.id,
    avater: state.profile.avater,
    mail: state.profile.mail,
    tel: state.profile.tel,
    sex: state.profile.sex,
    desc: state.profile.desc,
});

const mapDispatchToProps = dispatch => ({
  profileEditStart: (values, _id) => dispatch(profileEditStart(values, _id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEdit);
