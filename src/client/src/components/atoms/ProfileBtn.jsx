import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router';

const ProfileBtnWrap = styled.div`
  webkit-box-flex: 1;
  flex-grow: 1;
  height: 100%;
  justify-content: center;
`;

const ProfileBtnItem = styled.a`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const ProfileBtnIcon = styled.span`
  display: block;
  background-image: url(/images/icons2.png);
  background-repeat: no-repeat;
  background-size: 337px 298px;
  background-position: -263px 0;
  height: 24px;
  width: 24px;
`;

class ProfileBtn extends React.Component {
  render() {
    return (
      <ProfileBtnWrap>
        <ProfileBtnItem>
          <ProfileBtnIcon onClick={() => this.props.history.push('/profile')} />
        </ProfileBtnItem>
      </ProfileBtnWrap>
    );
  }
}

export default withRouter(ProfileBtn);
