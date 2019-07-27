import React from "react";
import styled from "styled-components";

const HomeBtnWrap = styled.div`
  webkit-box-flex: 1;
  flex-grow: 1;
  height: 100%;
  justify-content: center;
`;

const HomeBtnItem = styled.a`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const HomeBtnIcon = styled.span`
  display: block;
  background-image: url(/images/icons2.png);
  background-repeat: no-repeat;
  background-size: 337px 298px;
  background-position: -263px -175px;
  height: 24px;
  width: 24px;

  &.is-current {
    background-position: -263px -150px;
  }
`;

export default class HomeBtn extends React.Component {
  render() {
    return (
      <HomeBtnWrap>
        <HomeBtnItem href={this.props.link}>
          <HomeBtnIcon className={this.props.current ? "is-current" : ""} />
        </HomeBtnItem>
      </HomeBtnWrap>
    );
  }
}
