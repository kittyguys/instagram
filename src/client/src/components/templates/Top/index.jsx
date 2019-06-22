import React from "react";
import styled from "styled-components";

export default class Top extends React.Component {
  render() {
    return (
      <div>
        {!this.props.isLoggedIn && this.props.history.push("/login")}
        <p>Hello, World!!</p>
      </div>
    );
  }
}
