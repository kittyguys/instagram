import { call, takeLatest } from "redux-saga/effects";
import axios from "axios";

const profileEdit = async values => {
  try {
    const response = await axios.post(
      `${process.env.API_PATH}/users/profileedit`,
      values
    );
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

function* runProfileEdit({values, _id}) {
  console.log(_id)
  try {
    const response = yield call(profileEdit, {values, _id});
    if (response.data.user) {
        console.log(response.data.user)
      alert("成功");
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchProfileEdit() {
  yield takeLatest("PROFILEEDIT_START", runProfileEdit);
}
