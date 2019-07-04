import React from "react";
import styled from "styled-components";
import ProfileHeaderInner from "./ProfileHeaderInner";

const HeaderWrap = styled.div`
  &::before {
    background-color: rgba(0, 0, 0, 0.0975);
    bottom: -1px;
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    right: 0;
  }

  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  font-weight: 600;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
  flex-direction: column;
`;

export default class ProfileHeader extends React.Component {
  render() {
    return (
      <HeaderWrap>
        <ProfileHeaderInner id={this.props.id} />
      </HeaderWrap>
    );
  }
}
