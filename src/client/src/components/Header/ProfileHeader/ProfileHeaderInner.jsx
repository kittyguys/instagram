import React from "react";
import styled from "styled-components";
import SettingBtn from "../../atoms/SettingBtn";
import FollowingBtn from "../../atoms/FollowingBtn";

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  justify-content: space-between;
  padding: 0 16px;
`;

export default class ProfileHeaderInner extends React.Component {
  render() {
    return (
      <HeaderItem>
        <SettingBtn />
            <div>{this.props.id}</div>
        <FollowingBtn />
      </HeaderItem>
    );
  }
}
