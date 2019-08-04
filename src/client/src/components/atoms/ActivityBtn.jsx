import React from "react";
import styled from "styled-components";

const ActivityBtnWrap = styled.div`
  webkit-box-flex: 1;
  flex-grow: 1;
  height: 100%;
  justify-content: center;
`;

const ActivityBtnItem = styled.span`
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
  background-position: -263px -124px;
  height: 24px;
  width: 24px;

  &.is-current {
    background-position: -263px -74px;
  }
`;

export default class ActivityBtn extends React.Component {
  render() {
    return (
      <ActivityBtnWrap>
        <ActivityBtnItem>
          <ActivityBtnIcon className={this.props.current ? "is-current" : ""} />
        </ActivityBtnItem>
      </ActivityBtnWrap>
    );
  }
}
