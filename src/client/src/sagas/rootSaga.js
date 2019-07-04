import { fork } from "redux-saga/effects";
import { watchLogin } from "./login";
import { watchSignUp } from "./signUp";
import { watchFetchUser } from "./profile";

export function* rootSaga() {
  yield fork(watchLogin);
  yield fork(watchSignUp);
  yield fork(watchFetchUser);
}
