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
            console.log();
            return (
              <TLContents
                key={photo._id}
                uid={this.props.uid}
                _id={photo._id}
                avater={this.props.avater}
                id={this.props.id}
                imagePath={photo.imagePath}
              />
            );
          })}
      </ul>
    );
  }
}
