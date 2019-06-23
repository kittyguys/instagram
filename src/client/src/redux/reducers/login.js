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
        isLoggedIn: true,
        errMessage: false
      };
    default:
      return state;
  }
};

export default loginReducer;
