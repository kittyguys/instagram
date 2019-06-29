export const LOGIN = "LOGIN";

export const login = (uid, upass, token) => ({
  type: LOGIN,
  uid,
  upass,
  token
});
