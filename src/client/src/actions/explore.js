export const EXPLORE_START = "EXPLORE_START";
export const EXPLORE_SUCCESS = "EXPLORE_SUCCESS";
export const EXPLORE_FAILED = "EXPLORE_FAILED";

export const exploreStart = text => ({
  type: EXPLORE_START,
  text
});

export const exploreSuccess = userList => ({
  type: EXPLORE_SUCCESS,
  userList
});

export const exploreFailed = () => ({
  type: EXPLORE_FAILED
});
