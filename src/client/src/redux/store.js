import { createStore, combineReducers } from "redux";
import loginReducer from "./reducers/login";
import uploadReducer from "./reducers/upload";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  login: loginReducer,
  upload: uploadReducer,
  form: formReducer,
});

// 永続化の設定
const persistConfig = {
  key: "login", // Storageに保存されるキー名を指定する
  storage, // 保存先としてlocalStorageがここで設定される
  whitelist: ["login"] // Stateは`todos`のみStorageに保存する
  // blacklist: ['visibilityFilter'] // `visibilityFilter`は保存しない
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

export const persistor = persistStore(store);
export default store;
