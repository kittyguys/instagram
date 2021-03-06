import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";

const ExploreBtnWrap = styled.div`
  webkit-box-flex: 1;
  flex-grow: 1;
  height: 100%;
  justify-content: center;
`;

const ExploreBtnItem = styled.span`
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

  &.is-current {
    background-position: -125px -274px;
  }
`;

class ExploreBtn extends React.Component {
  render() {
    return (
      <ExploreBtnWrap>
        <ExploreBtnItem>
          <ExploreBtnIcon className={this.props.current ? "is-current" : ""} />
        </ExploreBtnItem>
      </ExploreBtnWrap>
    );
  }
}

export default withRouter(ExploreBtn);
