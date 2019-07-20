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

const GridImage = styled.img`
  width: 32%;
  margin: 2px;
`;

export default class ProfileContent extends React.Component {
  render() {
    let contents;
    if (this.props.selected === "grid") {
      contents = (
        <GridWrapper>
          {this.props.photos.map(photo => (
            <GridImage key={photo._id} src={photo.imagePath}></GridImage>
          ))}
        </GridWrapper>
      );
    }
    if (this.props.selected === "tl") {
      contents = (
        <ul>
          {this.props.photos.map(photo => (
            <TLContents
              id={this.props.id}
              avater={this.props.avater}
              imagePath={photo.imagePath}
            />
          ))}
        </ul>
      );
    }
    return <ProfileContentWrapper>{contents}</ProfileContentWrapper>;
  }
}
