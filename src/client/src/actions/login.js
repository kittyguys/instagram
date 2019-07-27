export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const loginStart = ({ uid, upass }) => ({
  type: LOGIN_START,
  uid,
  upass
});

export const loginSuccess = (_id, token) => ({
  type: LOGIN_SUCCESS,
  _id,
  token
});

export const loginFailed = () => ({
  type: LOGIN_FAILED
});
