import { call, put, takeLatest } from "redux-saga/effects";
import { loginSuccess, loginFailed } from "../actions/login";
import axios from "axios";

const login = async values => {
  const data = {
    id: values.uid,
    password: values.upass
  };
  try {
    const response = await axios.post(
      `${process.env.API_PATH}/users/login`,
      data
    );
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

function* runLogin(values) {
  try {
    const response = yield call(login, values);
    const { uid, upass } = response.data.user;
    const token = response.data.token;

    localStorage.setItem("token", response.data.token);
    yield put(loginSuccess(uid, upass, token));
  } catch (error) {
    yield put(loginFailed(error));
  }
}

export function* watchLogin() {
  yield takeLatest("LOGIN_START", runLogin);
}
