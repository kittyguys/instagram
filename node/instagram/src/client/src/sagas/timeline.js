import { call, put, takeLatest } from "redux-saga/effects";
import { fetchTimelineSuccess, fetchTimelineFailed } from "../actions/timeline";
import axios from "axios";

const fetchTimeline = async _id => {
  try {
    const data = { myid: _id };
    const response = await axios.post(`${process.env.API_PATH}/photos/`, data);
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

function* runFetchTimeline({ _id }) {
  try {
    const response = yield call(fetchTimeline, _id);
    const photoList = response.data;
    yield put(fetchTimelineSuccess(photoList));
  } catch (error) {
    yield put(fetchTimelineFailed(error));
  }
}

export function* watchFetchTimeline() {
  yield takeLatest("FETCHTIMELINE_START", runFetchTimeline);
}
