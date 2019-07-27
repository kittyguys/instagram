import React from "react";
import styled from "styled-components";
import TLContents from "./TLContents";

export default class Timeline extends React.Component {
  componentDidMount() {
    this.props.fetchTimelineStart(this.props.uid);
  }

  render() {
    return (
      <ul>
        {this.props.photoList &&
          this.props.photoList.map(photo => {
            return (
              <TLContents
                key={photo.photo._id}
                uid={this.props.uid}
                _id={photo.photo._id}
                avater={photo.user.avater}
                id={photo.user.id}
                imagePath={photo.photo.imagePath}
                like={photo.photo.like}
              />
            );
          })}
      </ul>
    );
  }
}
