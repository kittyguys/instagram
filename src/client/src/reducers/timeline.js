const timelineReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCHTIMELINE_START":
      return state;
    case "FETCHTIMELINE_SUCCESS":
      return state;
    case "FETCHTIMELINE_FAILED":
      return state;
    default:
      return state;
  }
};

export default timelineReducer;
