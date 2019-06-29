import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RegistItem = styled.div`
  color: #262626;
  margin: 15px;
  text-align: center;
`;

export default class RegistLink extends React.Component {
  render() {
    return (
      <RegistItem>
        アカウントをお持ちでないですか？
        <br />
        <Link to="/signup">登録する</Link>
      </RegistItem>
    );
  }
}
