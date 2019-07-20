import React from "react";
import styled from "styled-components";

const ProfileStatusWrapper = styled.div`
  display: flex;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 4px 20px 4px 0;
  margin-top: 30px;
`;

const ProfileStatusItem = styled.div`
  display: block;
  width: 33%;
`;

const ProfileStatusFollower = styled.div`
  display: block;
  width: 33%;
  padding-top: 14px;
`;

const StatusItemText = styled.div`
  color: #ccc;
  text-align: center;
`;

const StatusItemCount = styled.div`
  color: #222;
  text-align: center;
`;

export default class OtherProfileStatus extends React.Component {
  render() {
    const { photos, follow, follower } = this.props;
    return (
      <ProfileStatusWrapper>
        <ProfileStatusItem>
          <StatusItemText>投稿</StatusItemText>
          <StatusItemCount>{photos.length}</StatusItemCount>
          <StatusItemText>件</StatusItemText>
        </ProfileStatusItem>
        <ProfileStatusItem>
          <StatusItemText>フォロワー</StatusItemText>
          <StatusItemCount>{follower.length}</StatusItemCount>
          <StatusItemText>人</StatusItemText>
        </ProfileStatusItem>
        <ProfileStatusFollower>
          <StatusItemCount>{follow.length}</StatusItemCount>
          <StatusItemText>人をフォロー中</StatusItemText>
        </ProfileStatusFollower>
      </ProfileStatusWrapper>
    );
  }
}
