export const PROFILEEDIT_START = "PROFILEEDIT_START";
export const CHANGE_MODAL = "CHANGE_MODAL"

export const profileEditStart = (values, _id) => ({
  type: PROFILEEDIT_START,
  values,
  _id,
});

export const changeModal = (imageSrc, imageFile, modal) => ({
  type: CHANGE_MODAL,
  imageFile,
  imageSrc,
  modal
})

