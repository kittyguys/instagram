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
    case "LOGIN":
      console.log(action);
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
