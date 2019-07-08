import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router';

const BackBtnWrap = styled.div`
  flex-basis: 20%;
  flex-direction: row;
`;

const BackBtnItem = styled.button`
  background: 0 0;
  border: 0;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 14px;
  line-height: 18px;
`;

const BackBtnIcon = styled.span`
  display: block;
  background-image: url(/images/icons2.png);
  background-repeat: no-repeat;
  background-size: 337px 298px;
  background-position: -250px -248px;
  height: 24px;
  width: 24px;
  transform: rotate(180deg);
`;

class BackBtn extends React.Component {
  render() {
    return (
      <BackBtnWrap>
        <BackBtnItem>
          <BackBtnIcon  onClick={() => this.props.history.goBack()} />
        </BackBtnItem>
      </BackBtnWrap>
    );
  }
}

export default withRouter(BackBtn);
