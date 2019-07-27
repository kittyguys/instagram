import { connect } from "react-redux";
import ProfileEdit from "../components/ProfileEdit";
import { profileEditStart, changeModal } from "../actions/profileEdit";

const mapStateToProps = state => ({
    _id: state.profile._id,
    id: state.profile.id,
    avater: state.profile.avater,
    mail: state.profile.mail,
    tel: state.profile.tel,
    sex: state.profile.sex,
    desc: state.profile.desc,
    imageSrc: state.profile.imageSrc,
    imageFile: state.profile.imageFile,
    modal: state.profile.modal
});

const mapDispatchToProps = dispatch => ({
  profileEditStart: (values, _id) => dispatch(profileEditStart(values, _id)),
  changeModal: (imageSrc, imageFile, modal) => dispatch(changeModal(imageSrc, imageFile, modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEdit);
