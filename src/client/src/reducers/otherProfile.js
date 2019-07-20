const otherProfileReducer = (
  state = {
    _id: "",
    id: "",
    avater: "",
    photos: [],
    follow: [],
    follower: [],
    mail: "",
    tel: null,
    sex: "",
    desc: "",
    selected: "grid"
  },
  action
) => {
  switch (action.type) {
    case "FETCHOTHERUSER_START":
      return state;
    case "FETCHOTHERUSER_SUCCESS":
      return {
        ...state,
        _id: action._id,
        id: action.id,
        avater: action.avater,
        photos: action.photos,
        follow: action.follow,
        follower: action.follower,
        mail: action.mail,
        tel: action.tel,
        sex: action.sex,
        desc: action.desc
      };
    case "FETCHOTHERUSER_FAILED":
      return state;
    case "CHANGE_MENU_OTHER":
      return {
        ...state,
        selected: action.selected
      };
    default:
      return state;
  }
};

export default otherProfileReducer;
