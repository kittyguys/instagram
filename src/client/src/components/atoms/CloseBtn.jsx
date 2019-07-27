import React from "react";
import styled from "styled-components";

const CloseBtnWrap = styled.div`
  flex-basis: 20%;
  flex-direction: row;
`;

const CloseBtnItem = styled.button`
  background: 0 0;
  border: 0;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 14px;
  line-height: 18px;
`;

const CloseBtnIcon = styled.span`
  display: block;
  background-image: url(/images/icons2.png);
  background-repeat: no-repeat;
  background-size: 337px 298px;
  background-position: -250px -248px;
  height: 24px;
  width: 24px;
  transform: rotate(180deg);
`;

export default class CloseBtn extends React.Component {
  render() {
    return (
      <CloseBtnWrap>
        <CloseBtnItem>
          <CloseBtnIcon />
        </CloseBtnItem>
      </CloseBtnWrap>
    );
  }
}