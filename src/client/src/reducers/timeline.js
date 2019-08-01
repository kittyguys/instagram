const timelineReducer = (
  state = { photoList: [], isLoading: false },
  action
) => {
  switch (action.type) {
    case "FETCHTIMELINE_START":
      return {
        ...state,
        isLoading: true
      };
    case "FETCHTIMELINE_SUCCESS":
      return { ...state, photoList: action.photoList, isLoading: false };
    case "FETCHTIMELINE_FAILED":
      return state;
    default:
      return state;
  }
};

export default timelineReducer;
