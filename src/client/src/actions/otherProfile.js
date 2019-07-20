export const FETCHOTHERUSER_START = "FETCHOTHERUSER_START";
export const FETCHOTHERUSER_SUCCESS = "FETCHOTHERUSER_SUCCESS";
export const FETCHOTHERUSER_FAILED = "FETCHOTHERUSER_FAILED";

export const CHANGE_MENU_OTHER = "CHANGE_MENU_OTHER";

export const fetchOtherUserStart = _id => ({
  type: FETCHOTHERUSER_START,
  _id
});

export const fetchOtherUserSuccess = ({ user, photoList }) => ({
  type: FETCHOTHERUSER_SUCCESS,
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

export const fetchOtherUserFailed = () => ({
  type: FETCHOTHERUSER_FAILED
});

export const changeMenuOther = selected => ({
  type: CHANGE_MENU_OTHER,
  selected
});
