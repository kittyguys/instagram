export const FETCHUSER_START = "FETCHUSER_START";
export const FETCHUSER_SUCCESS = "FETCHUSER_SUCCESS";
export const FETCHUSER_FAILED = "FETCHUSER_FAILED";

export const CHANGE_MENU = "CHANGE_MENU";

export const fetchUserStart = _id => ({
  type: FETCHUSER_START,
  _id
});

export const fetchUserSuccess = ({_id, id, avater, photos, follow, follower}) => ({
  type: FETCHUSER_SUCCESS,
  _id,
  id,
  avater,
  photos,
  follow,
  follower
});

export const fetchUserFailed = () => ({
  type: FETCHUSER_FAILED
});

export const changeMenu = selected => ({
  type: CHANGE_MENU,
  selected
})