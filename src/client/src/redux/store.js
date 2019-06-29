import { createStore, combineReducers, applyMiddleware } from "redux";
import loginReducer from "./reducers/login";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { reducer as formReducer } from "redux-form";
<<<<<<< HEAD
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  login: loginReducer,
  upload: uploadReducer,
=======

const rootReducer = combineReducers({
  login: loginReducer,
>>>>>>> master
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

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
