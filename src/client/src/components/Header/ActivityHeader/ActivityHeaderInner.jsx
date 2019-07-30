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

export default class ActivityHeaderInner extends React.Component {
  render() {
    return (
      <HeaderItem>
        <Spacer />
        <div>アクティビティ</div>
        <Spacer />
      </HeaderItem>
    );
  }
}
