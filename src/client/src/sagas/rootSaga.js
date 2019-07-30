import { fork } from "redux-saga/effects";
import { watchLogin } from "./login";
import { watchSignUp } from "./signUp";
import { watchFetchUser } from "./profile";
import { watchFetchOtherUser } from "./otherProfile";
import { watchProfileEdit } from "./profileEdit";
import { watchFetchTimeline } from "./timeline";
import { watchExplore } from "./explore";
import { watchFollow } from "./follow";
import { watchUnfollow } from "./unfollow";
import { watchFetchLikeTimeline } from "./likeTimeline";

export function* rootSaga() {
  yield fork(watchLogin);
  yield fork(watchSignUp);
  yield fork(watchFetchUser);
  yield fork(watchFetchOtherUser);
  yield fork(watchProfileEdit);
  yield fork(watchFetchTimeline);
  yield fork(watchFetchLikeTimeline);
  yield fork(watchExplore);
  yield fork(watchFollow);
  yield fork(watchUnfollow);
}
