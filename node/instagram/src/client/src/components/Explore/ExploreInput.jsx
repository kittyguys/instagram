import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  padding: 8px 0px;
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid #ddd;
  background: #fafafa;
`;

const SearchInput = styled.input`
  width: 94%;
  border: 1px solid #dbdbdb;
  font-size: 14px;
  display: block;
  margin: 0 auto;
  border-radius: 2px;
  padding: 4px;
`;

export default class ExploreInput extends React.Component {
  handleChange(searchText) {
    this.props.exploreStart(searchText, this.props._id);
  }
  render() {
    return (
      <div>
        <SearchContainer>
          <SearchInput
            placeholder="検索"
            onChange={e => this.handleChange(e.target.value)}
          ></SearchInput>
        </SearchContainer>
      </div>
    );
  }
}
