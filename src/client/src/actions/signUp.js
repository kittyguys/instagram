export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILED = "SIGNUP_FAILED";

export const signUpStart = ({ uid, upass }) => ({
  type: SIGNUP_START,
  uid,
  upass
});

export const signUpSuccess = (uid, upass, token) => ({
  type: SIGNUP_SUCCESS
});

export const signUpFailed = () => ({
  type: SIGNUP_FAILED
});
