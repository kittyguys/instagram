const loginReducer = (
  state = {
    _id: "",
    upass: "",
    errMessage: false,
    token: ""
  },
  action
) => {
  switch (action.type) {
    case "LOGIN_START":
      return state;
    case "LOGIN_SUCCESS":
      return {
        ...state,
        _id: action._id,
        errMessage: false,
        token: action.token
      };
    case "LOGIN_FAILED":
      return state;
    default:
      return state;
  }
};

export default loginReducer;
