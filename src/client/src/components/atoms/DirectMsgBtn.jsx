import React from "react";
import styled from "styled-components";

const DirectMsgBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-basis: 20%;
  flex-direction: row;
`;
const DirectMsgBtnIcon = styled.span`
  display: block;
  background-image: url(/images/icons2.png);
  background-repeat: no-repeat;
  background-size: 337px 298px;
  background-position: -225px -199px;
  height: 24px;
  width: 24px;
`;

export default class DirectMsgBtn extends React.Component {
  render() {
    return (
      <DirectMsgBtnWrap>
        <a href="#">
          <DirectMsgBtnIcon />
        </a>
      </DirectMsgBtnWrap>
    );
  }
}
