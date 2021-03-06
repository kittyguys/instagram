import { createStore, combineReducers, applyMiddleware } from "redux";
import loginReducer from "../reducers/login";
import profileReducer from "../reducers/profile";
import timelineReducer from "../reducers/timeline";
import exploreReducer from "../reducers/explore";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { reducer as formReducer } from "redux-form";

import { rootSaga } from "../sagas/rootSaga";
import createSagaMiddleware from "redux-saga";
import otherProfileReducer from "../reducers/otherProfile";
import likeTimelineReducer from "../reducers/likeTimeline";

const sagaMiddleWare = createSagaMiddleware();

const rootReducer = combineReducers({
  login: loginReducer,
  profile: profileReducer,
  otherProfile: otherProfileReducer,
  timeline: timelineReducer,
  likeTimeline: likeTimelineReducer,
  explore: exploreReducer,
  form: formReducer
});

// 永続化の設定
const persistConfig = {
  key: "login", // Storageに保存されるキー名を指定する
  storage, // 保存先としてlocalStorageがここで設定される
  whitelist: ["login"] // Stateは`todos`のみStorageに保存する
  // blacklist: ['visibilityFilter'] // `visibilityFilter`は保存しない
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleWare));

export const persistor = persistStore(store);
export default store;

sagaMiddleWare.run(rootSaga);
