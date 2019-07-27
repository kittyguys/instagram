const uploadReducer = (state = { path: "" }, action) => {
  switch (action.type) {
    case "UPLOAD":
      return {
        ...state,
        path: action.path
      };
    default:
      return state;
  }
};

export default uploadReducer;
