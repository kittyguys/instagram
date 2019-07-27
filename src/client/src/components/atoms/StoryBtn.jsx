import React from "react";
import styled from "styled-components";

const StoryBtnWrap = styled.div`
  flex-basis: 20%;
  flex-direction: row;
`;

const StoryBtnItem = styled.button`
  background: 0 0;
  border: 0;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 14px;
  line-height: 18px;
`;

const StoryBtnIcon = styled.span`
  display: block;
  background-image: url(/images/icons2.png);
  background-repeat: no-repeat;
  background-size: 337px 298px;
  background-position: -175px -224px;
  height: 24px;
  width: 24px;
`;

export default class StoryBtn extends React.Component {
  render() {
    return (
      <StoryBtnWrap>
        <StoryBtnItem>
          <StoryBtnIcon />
        </StoryBtnItem>
      </StoryBtnWrap>
    );
  }
}
