import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import LoginContainer from "../components/organisms/Login/LoginContainer";
// import AuthService from "./services/AuthService"; // ログインチェックを行うサービス.

class PrivateRoute extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.authApi = new AuthService();
  //     this.state = {
  //       // ログインチェックが終わるまで、ローディングを表示.
  //       loading: true,
  //       // ログインチェック結果.
  //       isAuthenticated: false
  //     };
  //   }

  //   async componentDidMount() {
  //     // ログイン状態のチェック.
  //     // ここではasync/awaitで非同期に処理しているが、同期処理でもOK.
  //     // const ok = await this.authApi.checkLogin();
  //     const ok = true;

  //     // // 結果を反映.
  //     // this.setState({
  //     //   loading: false,
  //     //   isAuthenticated: ok
  //     // });
  //     this.props.checkLogin({
  //       loading: false,
  //       isAuthenticated: ok
  //     });

  render() {
    // ルーティング情報を取得.
    const { component: Component, ...rest } = this.props;

    // ログインチェック状態を取得.
    const token = this.props.token; //this.props.login;
    console.log(token);
    // // ログインチェック前なら、ローディングを表示.
    // if (loading) {
    //   return <div className="loading">Loading...</div>;
    // }

    // ログインチェック後はルーティング処理を行う.
    return (
      <Route
        {...rest}
        render={() => {
          // 未ログインなら、ログイン画面にリダイレクト.
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
  console.log(state);
  return {
    token: state.login.token
  };
};

export default connect(
  mapStateToProps,
  null
)(PrivateRoute);
