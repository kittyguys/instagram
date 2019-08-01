import React from "react";
import styled from "styled-components";
import TLContents from "../Timeline/TLContents";

const ProfileContentWrapper = styled.div`
  font-size: 20px;
`;

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImageWrapper = styled.div`
  width: 32%;
  height: 32vw;
  overflow: hidden;
  margin: 2px;
  position: relative;
`;

const GridImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default class ProfileContent extends React.Component {
  render() {
    let contents;
    if (this.props.selected === "grid") {
      contents = (
        <GridWrapper>
          {this.props.photos.map(photo => (
            <ImageWrapper>
              <GridImage key={photo._id} src={photo.imagePath}></GridImage>
            </ImageWrapper>
          ))}
        </GridWrapper>
      );
    }
    if (this.props.selected === "tl") {
      contents = (
        <ul>
          {this.props.photos
            .sort(function(a, b) {
              if (a.date > b.date) return -1;
              if (a.date < b.date) return 1;
              return 0;
            })
            .map(photo => (
              <TLContents
                key={photo._id}
                id={this.props.id}
                avater={this.props.avater}
                imagePath={photo.imagePath}
                like={photo.like}
              />
            ))}
        </ul>
      );
    }
    return <ProfileContentWrapper>{contents}</ProfileContentWrapper>;
  }
}
