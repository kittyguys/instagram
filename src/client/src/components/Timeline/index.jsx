import React from "react";
import styled from "styled-components";
import TLContents from "./TLContents";

export default class Timeline extends React.Component {
  componentDidMount() {
    this.props.fetchTimelineStart();
  }
  render() {
    console.log(this.props.photoList[0]);
    return (
      <ul>
        {this.props.photoList.map(photo => {
          return <TLContents avater="" id="hoge" imagePath={photo.imagePath} />;
        })}
      </ul>
    );
  }
}
