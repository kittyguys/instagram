import React from "react";
import styled from "styled-components";

const ExploreBtnWrap = styled.div`
  webkit-box-flex: 1;
  flex-grow: 1;
  height: 100%;
  justify-content: center;
`;

const ExploreBtnItem = styled.a`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const ExploreBtnIcon = styled.span`
  display: block;
  background-image: url(/images/icons2.png);
  background-repeat: no-repeat;
  background-size: 337px 298px;
  background-position: -150px -274px;
  height: 24px;
  width: 24px;
`;

export default class ExploreBtn extends React.Component {
  render() {
    return (
      <ExploreBtnWrap>
        <ExploreBtnItem href="">
          <ExploreBtnIcon />
        </ExploreBtnItem>
      </ExploreBtnWrap>
    );
  }
}
