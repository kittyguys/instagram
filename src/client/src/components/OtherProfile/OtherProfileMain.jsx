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
  background-color: #1e90ff;
  color: #fff;
`;

const AvatarImage = styled.img`
  width: 100%;
`;

class OtherProfileMain extends React.Component {
  render() {
    const { id, avater } = this.props;
    return (
      <ProfileMainWrapper>
        <ProfileAvater>
          <AvatarImage src={avater} alt="avatar" />
        </ProfileAvater>
        <ProfileNameBox>
          <ProfileName>{id}</ProfileName>
          {this.props.follower.includes(this.props._id) ? (
            <ProfileEdit
              onClick={() =>
                this.props.unfollowStart(this.props._id, this.props.uid)
              }
            >
              フォロー解除する
            </ProfileEdit>
          ) : (
            <ProfileEdit
              onClick={() =>
                this.props.followStart(this.props._id, this.props.uid)
              }
            >
              フォローする
            </ProfileEdit>
          )}
        </ProfileNameBox>
      </ProfileMainWrapper>
    );
  }
}

export default withRouter(OtherProfileMain);
