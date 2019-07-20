import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchOtherUserSuccess,
  fetchOtherUserFailed
} from "../actions/otherProfile";
import axios from "axios";

const fetchOtherUser = async _id => {
  try {
    const response = await axios.get(
      `${process.env.API_PATH}/users/me?_id=${_id}`
    );
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

const fetchOtherUserPhoto = async _id => {
  try {
    const response = await axios.get(
      `${process.env.API_PATH}/photos/me?_id=${_id}`
    );
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

function* runFetchOtherUser({ _id }) {
  try {
    const userResponse = yield call(fetchOtherUser, _id);
    const user = userResponse.data.user;
    const photoResponse = yield call(fetchOtherUserPhoto, _id);
    const photoList = photoResponse.data.photoList;
    yield put(fetchOtherUserSuccess({ user, photoList }));
  } catch (error) {
    yield put(fetchOtherUserFailed(error));
  }
}

export function* watchFetchOtherUser() {
  yield takeLatest("FETCHOTHERUSER_START", runFetchOtherUser);
}
