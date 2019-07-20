import React from "react";
import styled from "styled-components";
import TLContents from "./TLContents";

export default class Timeline extends React.Component {
  componentDidMount() {
    this.props.fetchTimelineStart();
  }
  render() {
    return (
      <ul>
        {this.props.photoList.photoList &&
          this.props.photoList.photoList.map(photo => {
            return (
              <TLContents
                key={photo._id}
                uid={this.props.uid}
                _id={photo._id}
                avater=""
                id="hoge"
                imagePath={photo.imagePath}
              />
            );
          })}
      </ul>
    );
  }
}
