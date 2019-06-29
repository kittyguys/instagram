import { fork } from "redux-saga/effects";
import { watchLogin } from "./login";
import { watchSignUp } from "./signUp";

export function* rootSaga() {
  yield fork(watchLogin);
  yield fork(watchSignUp);
}
