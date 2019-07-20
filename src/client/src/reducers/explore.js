const exploreReducer = (
  state = {
    userList: []
  },
  action
) => {
  switch (action.type) {
    case "EXPLORE_START":
      return state;
    case "EXPLORE_SUCCESS":
      return {
        ...state,
        userList: action.userList
      };
    case "EXPLORE_FAILED":
      return state;
    default:
      return state;
  }
};

export default exploreReducer;
