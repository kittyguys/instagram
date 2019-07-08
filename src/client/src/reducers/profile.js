const profileReducer = (
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
      case "FETCHUSER_START":
        return state;
      case "FETCHUSER_SUCCESS":
        return {
          ...state,
          _id: action._id,
          id: action.id,
          avatar: action.avater,
          photos: action.photos,
          follow: action.follow,
          follower: action.follower,
          mail: action.mail,
          tel: action.tel,
          sex: action.sex,
          desc: action.desc,
        };
      case "FETCHUSER_FAILED":
        return state;
      case "CHANGE_MENU":
        return {
          ...state,
          selected: action.selected,
        }
      default:
        return state;
    }
  };
  
  export default profileReducer;
  