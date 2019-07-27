import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";

const ProfileMainWrapper = styled.div`
  padding-top: 24px;
  display: flex;
  align-items: center;
`;

const ProfileAvater = styled.div`
  width: 70px;
  height: 70px;
  border: 2px solid #eee;
  border-radius: 50%;
  margin: 0 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ProfileNameBox = styled.div`
  display: block;
  width: 58%;
`;
const ProfileName = styled.div`
  display: block;
  font-size: 20px;
`;

const ProfileEdit = styled.div`
  display: inline-block;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border: 1px solid #ddd;
  margin-top: 10px;
  text-align: center;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
`;

const AvatarImage = styled.img`
  width: 100%;
`;

class ProfileMain extends React.Component {
  render() {
    const { id, avater } = this.props;
    return (
      <ProfileMainWrapper>
        <ProfileAvater>
          <AvatarImage src={avater} alt="avatar" />
        </ProfileAvater>
        <ProfileNameBox>
          <ProfileName>{id}</ProfileName>
          <ProfileEdit onClick={() => this.props.history.push("/profileedit")}>
            プロフィールを編集
          </ProfileEdit>
        </ProfileNameBox>
      </ProfileMainWrapper>
    );
  }
}

export default withRouter(ProfileMain);
