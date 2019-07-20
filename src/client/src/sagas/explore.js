import { call, put, takeLatest } from "redux-saga/effects";
import { exploreSuccess, exploreFailed } from "../actions/explore";
import axios from "axios";

const explore = async values => {
  const searchText = values.text;
  try {
    const response = await axios.get(
      `${process.env.API_PATH}/users/explore?searchText=${searchText}`
    );
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

function* runExplore(values) {
  try {
    const response = yield call(explore, values);
    const { userList } = response.data;
    yield put(exploreSuccess(userList));
  } catch (error) {
    yield put(exploreFailed(error));
  }
}

export function* watchExplore() {
  yield takeLatest("EXPLORE_START", runExplore);
}
