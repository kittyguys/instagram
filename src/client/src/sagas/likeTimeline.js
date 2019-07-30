import { call, put, takeLatest } from "redux-saga/effects";
import { fetchLikeTimelineSuccess, fetchLikeTimelineFailed } from "../actions/likeTimeline";
import axios from "axios";

const fetchLikeTimeline = async _id => {
  try {
    const data = { myid: _id };
    const response = await axios.post(`${process.env.API_PATH}/photos/mylike`, data);
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

function* runFetchLikeTimeline({ _id }) {
  try {
    const response = yield call(fetchLikeTimeline, _id);
    const photoList = response.data;
    console.log(photoList)
    yield put(fetchLikeTimelineSuccess(photoList));
  } catch (error) {
    yield put(fetchLikeTimelineFailed(error));
  }
}

export function* watchFetchLikeTimeline() {
  yield takeLatest("FETCHLIKETIMELINE_START", runFetchLikeTimeline);
}
