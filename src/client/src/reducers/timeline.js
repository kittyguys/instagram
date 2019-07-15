const timelineReducer = (state = { photoList: [] }, action) => {
  switch (action.type) {
    case "FETCHTIMELINE_START":
      return state;
    case "FETCHTIMELINE_SUCCESS":
      return { ...state, photoList: action.photoList };
    case "FETCHTIMELINE_FAILED":
      return state;
    default:
      return state;
  }
};

export default timelineReducer;
