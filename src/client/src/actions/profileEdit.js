export const PROFILEEDIT_START = "PROFILEEDIT_START"

export const profileEditStart = (values, _id) => ({
  type: PROFILEEDIT_START,
  values,
  _id,
});