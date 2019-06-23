import React from "react";
import styled from "styled-components";
import Title from "../../atoms/Title";
import RegistLink from "../../atoms/RegistLink";
import axios from "axios";

const LoginFormWrap = styled.div`
  color: #262626;
  flex-grow: 1;
  justify-content: center;
  margin-top: 12px;
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
  font-size: 14px;
  line-height: 18px;
  padding: 10px;
  box-sizing: border-box;
`;

const LoginFormBox = styled.div`
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 1px;
  margin: 0 0 10px;
  padding: 10px 0;
`;

const InputWrap = styled.div`
  align-items: stretch;
  border: 0 solid #000;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
  position: relative;
  margin: 0 40px 6px;
`;

const InputBox = styled.div`
  align-items: center;
  border-radius: 3px;
  box-sizing: border-box;
  color: #262626;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  position: relative;
  width: 100%;
  border: 1px solid #efefef;
`;

const InputInner = styled.div`
  height: 36px;
  flex: 1 0 0;
  padding: 0;
  position: relative;
  margin: 0;
  min-width: 0;
`;

const Input = styled.input`
  font-size: 12px;
  border: 0;
  flex: 1 0 0px;
  margin: 0;
  outline: 0;
  overflow: hidden;
  padding: 14px 0 2px 8px;
  text-overflow: ellipsis;
  background: #fafafa;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
`;

const Label = styled.label`
  color: #999;
  font-size: 12px;
  height: 36px;
  left: 8px;
  line-height: 36px;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-overflow: ellipsis;
  transform-origin: left;
  transition: transform ease-out 0.1s;
  user-select: none;
  white-space: nowrap;
  transform: scale(0.83333) translateY(-10px);
`;

const ButtonWrap = styled.div`
  margin: 8px 40px 22px;
`;

const Button = styled.button`
  appearance: none;
  background: 0 0;
  border: 0;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
  text-transform: inherit;
  text-overflow: ellipsis;
  user-select: none;
  width: 100%;
  background-color: #3897f0;
  border: 1px solid #3897f0;
  border-radius: 4px;
  color: #fff;
  position: relative;
  font-size: inherit;
`;

const ErrMessage = styled.p`
  color: #ed4956;
  margin: 0 40px 6px;
  text-align: center;
`;

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: "",
      upass: ""
    };
    this.changeId = this.changeId.bind(this);
    this.changePass = this.changePass.bind(this);
  }

  async login() {
    const data = {
      id: this.state.uid,
      password: this.state.upass
    };
    await new Promise(resolve =>
      axios
        .post(`${process.env.API_PATH}/login`, data)
        .then(() => {
          this.props.login(this.state.uid, this.state.upass);
          resolve();
        })
        .catch(error => {})
    );
    this.props.isLoggedIn && this.props.history.push("/");
  }

  changeId(e) {
    this.setState({ uid: e.target.value });
  }

  changePass(e) {
    this.setState({ upass: e.target.value });
  }

  render() {
    return (
      <LoginFormWrap>
        <LoginFormBox>
          <Title />
          <div>
            {this.props.errMessage && (
              <ErrMessage>ログイン認証エラー</ErrMessage>
            )}
            <InputWrap>
              <InputBox>
                <InputInner>
                  <Label htmlFor="uid">
                    電話番号、ユーザーネーム、メールアドレス
                  </Label>
                  <Input
                    type="text"
                    name="uid"
                    id="uid"
                    onChange={e => {
                      this.changeId(e);
                    }}
                    value={this.state.uid}
                  />
                </InputInner>
              </InputBox>
            </InputWrap>
            <InputWrap>
              <InputBox>
                <InputInner>
                  <Label htmlFor="upass">パスワード</Label>
                  <Input
                    type="password"
                    name="upass"
                    id="upass"
                    onChange={e => {
                      this.changePass(e);
                    }}
                    value={this.state.upass}
                  />
                </InputInner>
              </InputBox>
            </InputWrap>
            <ButtonWrap>
              <Button
                type="submit"
                onClick={() => {
                  this.login();
                }}
              >
                ログイン
              </Button>
            </ButtonWrap>
          </div>
        </LoginFormBox>
        <LoginFormBox>
          <RegistLink />
        </LoginFormBox>
        {this.props.isLoggedIn && "ログイン認証OK"}
      </LoginFormWrap>
    );
  }
}
