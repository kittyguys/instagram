import React from "react";
import styled from "styled-components";

const ActivityBtnWrap = styled.div`
  webkit-box-flex: 1;
  flex-grow: 1;
  height: 100%;
  justify-content: center;
`;

const ActivityBtnItem = styled.a`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const ActivityBtnIcon = styled.span`
  display: block;
  background-image: url(/images/icons2.png);
  background-repeat: no-repeat;
  background-size: 337px 298px;
  background-position: -263px -125px;
  height: 24px;
  width: 24px;
`;

export default class ActivityBtn extends React.Component {
  render() {
    return (
      <ActivityBtnWrap>
        <ActivityBtnItem href="">
          <ActivityBtnIcon />
        </ActivityBtnItem>
      </ActivityBtnWrap>
    );
  }
}
