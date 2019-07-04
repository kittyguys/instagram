import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router';

const SettingBtnWrap = styled.div`
  flex-basis: 20%;
  flex-direction: row;
`;

const SettingBtnItem = styled.button`
  background: 0 0;
  border: 0;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 14px;
  line-height: 18px;
`;

const SettingBtnIcon = styled.span`
  display: block;
  background-image: url(/images/icons2.png);
  background-repeat: no-repeat;
  background-size: 337px 298px;
  background-position: -200px -274px;
  height: 24px;
  width: 24px;
`;

class SettingBtn extends React.Component {

  settingClick() {
    const logout = window.confirm('ログアウトしますか？')
    if(logout) {
      localStorage.removeItem('persist:login');
      location.replace('/');
    }
  }

  render() {
    return (
      <SettingBtnWrap>
        <SettingBtnItem>
          <SettingBtnIcon  onClick={() => this.settingClick()} />
        </SettingBtnItem>
      </SettingBtnWrap>
    );
  }
}

export default withRouter(SettingBtn);
