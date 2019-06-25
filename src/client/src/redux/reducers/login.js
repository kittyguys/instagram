const loginReducer = (
  state = { uid: "", upass: "", isLoggedIn: false, errMessage: false },
  action
) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        uid: action.uid,
        upass: action.upass,
        errMessage: false,
        token: action.token
      };
    default:
      return state;
  }
};

export default loginReducer;
