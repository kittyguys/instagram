import React from "react";
import styled from "styled-components";

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

export default class LoginFormSubmit extends React.Component {
  render() {
    return (
      <ButtonWrap>
        <Button
          type="submit"
          onClick={() => {
            this.checkAuth(this.state.uid, this.state.upass);
          }}
        >
          ログイン
        </Button>
      </ButtonWrap>
    );
  }
}
