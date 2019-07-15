import { call, put, takeLatest } from "redux-saga/effects";
import { fetchTimelineSuccess, fetchTimelineFailed } from "../actions/timeline";
import axios from "axios";

const fetchTimeline = async () => {
  try {
    const response = await axios.get(`${process.env.API_PATH}/photos/`);
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

function* runFetchTimeline() {
  try {
    const response = yield call(fetchTimeline);
    const photoList = response.data;
    yield put(fetchTimelineSuccess(photoList));
  } catch (error) {
    yield put(fetchTimelineFailed(error));
  }
}

export function* watchFetchTimeline() {
  yield takeLatest("FETCHTIMELINE_START", runFetchTimeline);
}
