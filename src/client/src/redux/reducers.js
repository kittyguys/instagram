const userReducer = (
  state = { uid: "", upass: "", isLoggedIn: false, errMessage: false },
  action
) => {
  switch (action.type) {
    case "LOGIN":
      if (action.uid === "a" && action.upass === "b") {
        return {
          ...state,
          uid: action.uid,
          upass: action.upass,
          isLoggedIn: true,
          errMessage: false
        };
      }
      return {
        ...state,
        errMessage: true
      };
    default:
      return state;
  }
};

export default userReducer;
