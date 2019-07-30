const likeTimelineReducer = (state = { photoList: [] }, action) => {
    switch (action.type) {
      case "FETCHLIKETIMELINE_START":
        return state;
      case "FETCHLIKETIMELINE_SUCCESS":
        return { ...state, photoList: action.photoList };
      case "FETCHLIKETIMELINE_FAILED":
        return state;
      default:
        return state;
    }
  };
  
  export default likeTimelineReducer;
  