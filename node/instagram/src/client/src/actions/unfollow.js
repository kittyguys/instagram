export const UNFOLLOW_START = "UNFOLLOW_START";

export const unfollowStart = (_id, uid) => ({
  type: UNFOLLOW_START,
  _id,
  uid
});
