import React from "react";
import styled from "styled-components";
import TLContents from "../Timeline/TLContents";

export default class LikeTimeline extends React.Component {
  componentDidMount() {
    this.props.fetchLikeTimelineStart(this.props.uid);
  }

  render() {
    return (
      <ul>
        {this.props.photoList &&
          this.props.photoList
            .sort(function(a, b) {
              if (a.photo.date > b.photo.date) return -1;
              if (a.photo.date < b.photo.date) return 1;
              return 0;
            })
            .map(photo => {
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
