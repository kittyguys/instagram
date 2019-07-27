import { call, takeLatest } from "redux-saga/effects";
import axios from "axios";

const signUp = async values => {
  const data = {
    id: values.uid,
    password: values.upass
  };
  try {
    const response = await axios.post(
      `${process.env.API_PATH}/users/signup`,
      data
    );
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

function* runSignUp(values) {
  console.log(values);
  try {
    const response = yield call(signUp, values);
    if (response.data.userList) {
      alert("成功");
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchSignUp() {
  yield takeLatest("SIGNUP_START", runSignUp);
}
