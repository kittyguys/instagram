import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

const unfollow = async values => {
  const data = {
    _id: values._id,
    targetId: values.uid
  };
  try {
    const response = await axios.post(
      `${process.env.API_PATH}/users/unfollow`,
      data
    );
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

function* runUnfollow(values) {
  try {
    const response = yield call(unfollow, values);
    console.log(response.data.user);
  } catch (error) {
    console.log(error);
  }
}

export function* watchUnfollow() {
  yield takeLatest("UNFOLLOW_START", runUnfollow);
}
