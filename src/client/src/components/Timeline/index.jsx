import React from "react";
import styled from "styled-components";

const Article = styled.article`
  border-bottom: 1px solid #efefef;
  margin-bottom: 15px;
`;
const Header = styled.header`
  border-bottom-width: 0.5px;
  padding-right: 40px;
  height: 60px;
  padding: 16px;
  align-items: center;
  flex-direction: row;
`;

export default class Timeline extends React.Component {
  componentDidMount() {
    this.props.fetchTimelineStart();
  }
  render() {
    return (
      <Article>
        <Header></Header>
      </Article>
    );
  }
}
