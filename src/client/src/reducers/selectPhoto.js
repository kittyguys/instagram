const selectPhotoReducer = (state = {}, action) => {
  switch (action.type) {
    case "SELECT_PHOTO":
      return {
        ...state
      };
    default:
      return state;
  }
};

export default selectPhotoReducer;
