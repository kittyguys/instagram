export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const loginStart = () => ({
  type: LOGIN_START
});

export const loginSuccess = (uid, upass, token) => ({
  type: LOGIN_SUCCESS,
  uid,
  upass,
  token
});

export const loginFailed = () => ({
  type: LOGIN_FAILED
});
