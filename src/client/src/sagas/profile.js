import { call, put, takeLatest } from "redux-saga/effects";
import { fetchUserSuccess, fetchUserFailed } from "../actions/profile";
import axios from "axios";

const fetchUser = async _id => {
  try {
    const response = await axios.get(
      `${process.env.API_PATH}/users/me?_id=${_id}`
    );
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

const fetchUserPhoto = async _id => {
  try {
    const response = await axios.get(
      `${process.env.API_PATH}/photos/me?_id=${_id}`
    );
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

function* runFetchUser({ _id }) {
  try {
    const userResponse = yield call(fetchUser, _id);
    const user = userResponse.data.user;
    const photoResponse = yield call(fetchUserPhoto, _id);
    const photoList = photoResponse.data.photoList;
    console.log(photoList);
    yield put(fetchUserSuccess({ user, photoList }));
  } catch (error) {
    yield put(fetchUserFailed(error));
  }
}

export function* watchFetchUser() {
  yield takeLatest("FETCHUSER_START", runFetchUser);
}
