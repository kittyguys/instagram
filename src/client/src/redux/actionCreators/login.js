export const LOGIN = "LOGIN";

export const login = (uid, upass) => ({
  type: LOGIN,
  uid,
  upass
});
