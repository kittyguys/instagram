import { call, put, takeLatest } from "redux-saga/effects";
import { fetchTimelineSuccess, fetchTimelineFailed } from "../actions/timeline";
import axios from "axios";

const fetchFollowingUsers = async _id => {
  try {
    const data = { myid: _id };
    const response = await axios.post(
      `${process.env.API_PATH}/photos/followingUsers`,
      data
    );
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

const fetchPhotoList = async followingUserId => {
  try {
    const data = { _id: followingUserId };
    const response = await axios.post(
      `${process.env.API_PATH}/photos/followingUsersPhoto`,
      data
    );
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

const fetchUserData = async userId => {
  try {
    const response = await axios.get(
      `${process.env.API_PATH}/users/me?_id=${userId}`
    );
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

function* runFetchTimeline({ _id }) {
  try {
    const response = yield call(fetchFollowingUsers, _id);
    let followingUsers = response.data.followingUsers;
    followingUsers = [...followingUsers, _id];
    let followingPhotoList = [];
    let fixedPhotoList = [];
    for (const followingUserId of followingUsers) {
      const response = yield call(fetchPhotoList, followingUserId);
      followingPhotoList = followingPhotoList.concat(response.data.photoList);
    }
    for (const followingPhoto of followingPhotoList) {
      const response = yield call(fetchUserData, followingPhoto.uid);
      const fixedPhoto = {
        ...followingPhoto,
        id: response.data.user.id,
        avatar: response.data.user.avater
      };
      fixedPhotoList = [...fixedPhotoList, fixedPhoto];
      console.log(fixedPhotoList);
    }
    yield put(fetchTimelineSuccess(fixedPhotoList));
  } catch (error) {
    yield put(fetchTimelineFailed(error));
  }
}

export function* watchFetchTimeline() {
  yield takeLatest("FETCHTIMELINE_START", runFetchTimeline);
}
