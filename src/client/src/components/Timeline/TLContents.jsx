import React from "react";
import styled from "styled-components";

const TLHeader = styled.div`
  padding: 12px 14px;
  display: flex;
  align-items: center;
  position: relative;
`;

const TLAvatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const TLName = styled.div`
  width: 30%;
  font-size: 14px;
`;

const TLAvatarImage = styled.img`
  width: 100%;
`;

const TLPhoto = styled.img`
  width: 100%;
  border-top: 0.5px solid #ddd;
  border-bottom: 0.5px solid #ddd;
`;

const TLFooter = styled.div`
  display: flex;
  padding: 10px;
  position: relative;
`;

const TLFooterLike = styled.div`
  display: block;
  background-image: url(/images/icons2.png);
  background-repeat: no-repeat;
  background-size: 337px 298px;
  background-position: -263px -124px;
  height: 24px;
  width: 24px;
  margin-right: 10px;
`;

const TLFooterComment = styled.div`
  display: block;
  background-image: url(/images/icons2.png);
  background-repeat: no-repeat;
  background-size: 337px 298px;
  background-position: -51px -199px;
  height: 24px;
  width: 24px;
  margin-right: 10px;
`;

const TLFooterMessage = styled.div`
  display: block;
  background-image: url(/images/icons2.png);
  background-repeat: no-repeat;
  background-size: 337px 298px;
  background-position: -225px -197px;
  height: 24px;
  width: 24px;
`;

const TLFooterTag = styled.div`
  display: block;
  background-image: url(/images/icons2.png);
  background-repeat: no-repeat;
  background-size: 337px 298px;
  background-position: -100px -274px;
  height: 24px;
  width: 24px;
  position: absolute;
  right: 10px;
`;

const TLRead = styled.div`
  display: block;
  background-image: url(/images/icons2.png);
  background-repeat: no-repeat;
  background-size: 337px 298px;
  background-position: -288px -25px;
  height: 24px;
  width: 24px;
  position: absolute;
  right: 10px;
`;

export default class ProfileContent extends React.Component {
  render() {
    return (
      <li>
        <TLHeader>
          <TLAvatar>
            <TLAvatarImage src={this.props.avater}></TLAvatarImage>
          </TLAvatar>
          <TLName>{this.props.id}</TLName>
          <TLRead></TLRead>
        </TLHeader>
        <TLPhoto src={this.props.imagePath}></TLPhoto>
        <TLFooter>
          <TLFooterLike></TLFooterLike>
          <TLFooterComment></TLFooterComment>
          <TLFooterMessage></TLFooterMessage>
          <TLFooterTag></TLFooterTag>
        </TLFooter>
      </li>
    );
  }
}
