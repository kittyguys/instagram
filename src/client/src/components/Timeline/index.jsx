import React from "react";
import styled from "styled-components";

export default class Timeline extends React.Component {
  componentDidMount() {
    this.props.fetchTimelineStart();
  }
  render() {
    return <div></div>;
  }
}
