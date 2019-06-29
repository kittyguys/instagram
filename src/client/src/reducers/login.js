const loginReducer = (
  state = {
    uid: "",
    upass: "",
    isLoggedIn: false,
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
        uid: action.uid,
        upass: action.upass,
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
