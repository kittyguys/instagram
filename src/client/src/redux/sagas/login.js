import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import { loginStart, loginSuccess, loginFailed } from "../actionCreators/login";

const login = async values => {
  const data = {
    id: values.uid,
    password: values.upass
  };
  const response = await axios.post(
    `${process.env.API_PATH}/users/login`,
    data
  );
  if (response.data.user) {
    this.props.login(
      response.data.user.id,
      response.data.user.password,
      response.data.token
    );
    localStorage.setItem("token", response.data.token);
  } else {
    // this.setState({ errMessage: true });
  }
};

function* runLogin(values) {
  try {
    const response = yield call(login, values);
    const { uid, upass } = response.data.user;
    const token = response.token;
    yield put(loginSuccess(uid, upass, token));
  } catch {}
}
