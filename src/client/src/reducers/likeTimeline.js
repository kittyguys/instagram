const likeTimelineReducer = (state = { photoList: [], isLoading: true }, action) => {
    switch (action.type) {
      case "FETCHLIKETIMELINE_START":
        return {
          ...state,
          isLoading: true
        };
      case "FETCHLIKETIMELINE_SUCCESS":
        return { ...state, photoList: action.photoList, isLoading: false };
      case "FETCHLIKETIMELINE_FAILED":
        return state;
      default:
        return state;
    }
  };
  
  export default likeTimelineReducer;
  