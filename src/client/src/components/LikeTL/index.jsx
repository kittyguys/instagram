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
              if (a.date > b.date) return -1;
              if (a.date < b.date) return 1;
              return 0;
            })
            .map(photo => {
              return (
                <TLContents
                  key={photo._id}
                  uid={this.props.uid}
                  _id={photo._id}
                  avater={photo.avatar}
                  id={photo.id}
                  imagePath={photo.imagePath}
                  like={photo.like}
                />
              );
            })}
      </ul>
    );
  }
}
