import React from "react";
import styled from "styled-components";
import TLContents from "./TLContents";

const LoadingWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 60px;
`

export default class Timeline extends React.Component {
  componentDidMount() {
    this.props.fetchTimelineStart(this.props.uid);
  }

  render() {
    return (
      <ul>
        {this.props.isLoading === true ? (
          <LoadingWrap>
            <img src="./images/icon_loader_f_ww_01_s1.gif" alt="loading" />
          </LoadingWrap>
        ) : (
          this.props.photoList &&
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
            })
        )}
        {}
      </ul>
    );
  }
}
