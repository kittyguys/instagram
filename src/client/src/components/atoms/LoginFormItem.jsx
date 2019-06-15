import React from "react";
import styled from "styled-components";

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
  margin: 0;
  min-width: 0;
`;

const Input = styled.input`
  font-size: 16px;
  border: 0;
  flex: 1 0 0px;
  margin: 0;
  outline: 0;
  overflow: hidden;
  padding: 9px 0 7px 8px;
  text-overflow: ellipsis;
  background: #fafafa;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
`;

export default class LoginFormItem extends React.Component {
  render() {
    return (
      <InputWrap>
        <InputBox>
          <InputInner>
            <Input
              type="text"
              name="uid"
              id="uid"
              placeholder="電話番号、ユーザーネーム、メールアドレス"
              onChange={event => {
                this.handleChangeId(event);
              }}
              //value={this.state.uid}
            />
          </InputInner>
        </InputBox>
      </InputWrap>
    );
  }
}
