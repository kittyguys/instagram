import React from "react";
import styled from "styled-components";
import BackBtn from "../../atoms/BackBtn";
import Spacer from "../../atoms/Spacer";

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  justify-content: space-between;
  padding: 0 16px;
`;

export default class ProfileEditHeaderInner extends React.Component {
  render() {
    return (
      <HeaderItem>
        <BackBtn />
            <div>プロフィールを編集</div>
        <Spacer />
      </HeaderItem>
    );
  }
}
