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
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridImage = styled.img`
  width: 100%;
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
          {this.props.photos.map(photo => (
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
