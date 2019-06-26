import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import LoginContainer from "../components/organisms/Login/LoginContainer";

class PrivateRoute extends Component {
  render() {
    // ルーティング情報を取得.
    const { component: Component, ...rest } = this.props;

    // ログインチェック状態を取得.
    const token = this.props.token; //this.props.login;

    // ログインチェック後はルーティング処理を行う.
    return (
      <Route
        {...rest}
        render={() => {
          // 未ログインなら、ログイン画面コンポーネントを表示.
          if (!token) {
            return <LoginContainer />;
          }
          // ログイン済なら、指定されたコンポーネントを表示.
          return <Component />;
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.login.token
  };
};

export default connect(
  mapStateToProps,
  null
)(PrivateRoute);
