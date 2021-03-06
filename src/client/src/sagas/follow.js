import { call, put, takeLatest } from "redux-saga/effects";
import { followChange } from "../actions/otherProfile";
import axios from "axios";

const follow = async values => {
  const data = {
    _id: values._id,
    targetId: values.uid
  };
  try {
    const response = await axios.post(
      `${process.env.API_PATH}/users/follow`,
      data
    );
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

function* runFollow(values) {
  try {
    const response = yield call(follow, values);
    yield put(
      followChange(response.data.user.follow, response.data.user.follower)
    );
  } catch (error) {
    console.log(error);
  }
}

export function* watchFollow() {
  yield takeLatest("FOLLOW_START", runFollow);
}
