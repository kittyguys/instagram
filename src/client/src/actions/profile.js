export const FETCHUSER_START = "FETCHUSER_START";
export const FETCHUSER_SUCCESS = "FETCHUSER_SUCCESS";
export const FETCHUSER_FAILED = "FETCHUSER_FAILED";

export const CHANGE_MENU = "CHANGE_MENU";

export const fetchUserStart = _id => ({
  type: FETCHUSER_START,
  _id
});

export const fetchUserSuccess = ({ user, photoList }) => ({
  type: FETCHUSER_SUCCESS,
  _id: user._id,
  id: user.id,
  avater: user.avater,
  photos: photoList,
  follow: user.follow,
  follower: user.follower,
  mail: user.mail,
  tel: user.tel,
  sex: user.sex,
  desc: user.desc
});

export const fetchUserFailed = () => ({
  type: FETCHUSER_FAILED
});

export const changeMenu = selected => ({
  type: CHANGE_MENU,
  selected
});
