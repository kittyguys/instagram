export const FOLLOW_START = "FOLLOW_START";

export const followStart = (_id, uid) => ({
  type: FOLLOW_START,
  _id,
  uid
});
