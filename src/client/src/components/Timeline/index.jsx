import React from "react";
import styled from "styled-components";

const ArticleWrap = styled.div`
  margin-top: 44px;
`;
const Article = styled.article`
  margin-bottom: 15px;
`;
const Header = styled.header`
  border-bottom: 1px solid #efefef;
  border-bottom-width: 0.5px;
  padding-right: 40px;
  height: 60px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
const Avater = styled.div`
  width: 32px;
  height: 32px;
  position: relative;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
    max-height: 100%;
  }
`;
const UserName = styled.div`
  align-items: flex-start;
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  margin-left: 12px;
  overflow: hidden;
`;
const Button = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
`;
const ButtonIcon = styled.span`
  width: 20px;
  height: 20px;
  background-image: url(/images/icons2.png);
  background-repeat: no-repeat;
  background-size: 355px 344px;
  background-position: -307px -62px;
`;
const PhotoWrap = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;
const PhotoInfo = styled.div`
  padding: 0 16px;
`;
const PhotoOperation = styled.div``;
const LikeNum = styled.div``;
const PhotoDetail = styled.div``;
const PostedDate = styled.div``;

export default class Timeline extends React.Component {
  componentDidMount() {
    this.props.fetchTimelineStart();
  }
  render() {
    console.log(this.props.photoList[0]);
    return (
      <ArticleWrap>
        <Article>
          <Header>
            <Avater>
              <img src="" />
            </Avater>
            <UserName>ユーザー名</UserName>
            <Button>
              <ButtonIcon />
            </Button>
          </Header>
          <PhotoWrap>
            <img src={this.props.photoList} />
          </PhotoWrap>
          <PhotoInfo>
            <PhotoOperation>
              {/* <LikeButton></LikeButton>
              <CommentButton></CommentButton>
              <ShareButton></ShareButton>
              <LabelBottun></LabelBottun> */}
            </PhotoOperation>
            <LikeNum>いいね！0件</LikeNum>
            <PhotoDetail>hello!</PhotoDetail>
            <PostedDate>0日前</PostedDate>
          </PhotoInfo>
        </Article>
      </ArticleWrap>
    );
  }
}
