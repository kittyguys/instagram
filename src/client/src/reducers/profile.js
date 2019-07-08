const profileReducer = (
    state = {
      _id: "",
      id: "",
      avater: "",
      photos: [],
      follow: [],
      follower: [],
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
          follower: action.follower
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
  