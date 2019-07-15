import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import Axios from "axios";

const UploadModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;

  header {
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    font-weight: 600;
    flex-direction: column;

    &::before {
      background-color: rgba(0, 0, 0, 0.0975);
      bottom: -1px;
      content: "";
      height: 1px;
      left: 0;
      position: absolute;
      right: 0;
    }
  }

  .uploadHeader {
    align-items: center;
    height: 44px;
    justify-content: space-between;
    padding: 0 16px;
    flex-direction: row;
    display: flex;

    &__back {
      flex-basis: 20%;
      flex-direction: row;

      button {
        background: 0 0;
        border: 0;
        display: block;
        font-size: 16px;
        font-weight: 600;
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif;
        line-height: 18px;

        span {
          background-image: url(../images/icons3.png);
          background-repeat: no-repeat;
          background-size: 410px 396px;
          background-position: -387px -143px;
          height: 21px;
          width: 11px;
          display: block;
          overflow: hidden;
          text-indent: 110%;
          white-space: nowrap;
        }
      }
    }

    h1 {
      align-items: center;
      color: #262626;
      display: block;
      flex-grow: 1;
      justify-content: center;
      min-width: 0;
      overflow: hidden;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 16px;
    }

    &__share {
      justify-content: flex-end;
      flex-basis: 20%;
      flex-direction: row;

      button {
        color: #3897f0;
        background: 0 0;
        border: 0;
        display: block;
        font-size: 16px;
        font-weight: 600;
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif;
        line-height: 18px;
      }
    }
  }

  .uploadForm {
    border-top: 1px solid #efefef;
    position: relative;

    &__content {
      background-color: #fff;
      border-bottom: 1px solid #efefef;
      flex-direction: row;
      height: 81px;
      padding: 16px;
      flex-shrink: 0;
      display: flex;
    }

    &__avatar {
      background-color: #fafafa;
      border-radius: 50%;
      box-sizing: border-box;
      display: block;
      flex: 0 0 auto;
      overflow: hidden;
      position: relative;
      margin-right: 6px;
      margin-top: -2px;
      width: 30px;
      height: 30px;

      img {
        width: 100%;
        height: 100%;
      }

      &::after {
        border: 1px solid rgba(0, 0, 0, 0.0975);
        border-radius: 50%;
        bottom: 0;
        content: "";
        left: 0;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
      }
    }

    &__input {
      flex-grow: 1;
      flex-shrink: 1;
      overflow: hidden;
      width: 100%;

      textarea {
        ackground: 0 0;
        border: 0;
        color: #262626;
        font-size: 14px;
        outline: 0;
        line-height: 18px;
        height: 45px;
        overflow: auto;
        overflow-wrap: break-word;
        resize: none;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif;
      }
    }

    &__image {
      height: 48px;
      min-width: 48px;
      position: relative;
      overflow: hidden;
      align-items: stretch;
      border: 0 solid #000;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      margin: 0;
      padding: 0;
      position: relative;

      img {
        background-color: #efefef;
        object-fit: cover;
        height: 48px;
        width: auto;
      }
    }

    &__tag {
      align-items: center;
      background-color: #fff;
      border-bottom: 1px solid #efefef;
      border-left: none;
      border-right: none;
      border-top: 1px solid #efefef;
      color: #262626;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      height: 44px;
      width: 100%;
      flex-direction: row;
      font-size: 16px;
      justify-content: space-between;
      margin-top: 12px;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Helvetica, Arial, sans-serif;
      line-height: 18px;

      span {
        margin-left: 16px;
      }

      &Icon {
        margin: 0 16px;
        flex-shrink: 0;
        background-image: url(../images/icons3.png);
        background-repeat: no-repeat;
        background-size: 410px 396px;
        background-position: -324px -256px;
        height: 15px;
        width: 12px;
      }
    }

    &__detail {
      margin-top: 12px;
      margin-left: 16px;

      button {
        color: #999;
        font-size: 12px;
        line-height: 14px;
      }
    }
  }
`;

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: ""
    };
    this.uploadDetail = this.uploadDetail.bind(this);
    this.handleChangeCaption = this.handleChangeCaption.bind(this);
  }

  handleChangeCaption(event) {
    this.setState({ caption: event.target.value });
  }

  getBlobObj() {
    return new Promise(resolve => {
      const blobUrl = this.props.history.location.state.blobUrl;
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.responseType = "blob";
      xhr.open("GET", blobUrl, true);
      xhr.send();
    });
  }

  blobToFile(blobObj, fileName) {
    return new Promise(resolve => {
      const fileObj = new File([blobObj], fileName, {
        lastModified: 0
      });
      resolve(fileObj);
    });
  }

  async uploadDetail() {
    const blobObj = await this.getBlobObj();
    const fileType = blobObj.type.replace("image/", ".");
    const fileName = new Date().getTime() + fileType;
    const fileObj = await this.blobToFile(blobObj, fileName);

    const formData = new FormData();
    formData.append("photo", fileObj);
    formData.append("uid", this.props._id);

    Axios.post("/photos/upload", formData, {
      headers: { "content-type": "multipart/form-data" }
    })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        new Error(error);
      });
  }

  render() {
    return (
      <UploadModal>
        <header>
          <div className="uploadHeader">
            <div className="uploadHeader__back">
              <button
                className=""
                onClick={() => {
                  this.props.history.push("/");
                }}
              >
                <span>戻る</span>
              </button>
            </div>
            <h1>新規投稿</h1>
            <div className="uploadHeader__share">
              <button onClick={this.uploadDetail}>シェアする</button>
            </div>
          </div>
        </header>

        <div className="uploadForm">
          <section className="uploadForm__content">
            <span className="uploadForm__avatar">
              <img
                src="https://scontent-nrt1-1.cdninstagram.com/vp/38fb72ba053e423b0174b592ba2aef24/5D9160D6/t51.2885-19/s150x150/21827245_132582387384492_936859094562635776_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com"
                alt=""
              />
            </span>
            <div className="uploadForm__input">
              <textarea
                placeholder="キャプションを入力…"
                onChange={event => {
                  this.handleChangeCaption(event);
                }}
                value={this.state.caption}
              ></textarea>
            </div>
            <div className="uploadForm__image">
              {this.props.history.location.state.blobUrl && (
                <img
                  src={this.props.history.location.state.blobUrl}
                  alt="アップロードする写真のプレビュー"
                />
              )}
            </div>
          </section>
          <section>
            <button className="uploadForm__tag">
              <span>位置情報を追加</span>
              <span className="uploadForm__tagIcon"></span>
            </button>
          </section>
          <section>
            <button className="uploadForm__tag">
              <span>タグ付けする</span>
              <span className="uploadForm__tagIcon"></span>
            </button>
          </section>
          <section>
            <div className="uploadForm__detail">
              <button type="button">
                <div>詳細設定</div>
              </button>
            </div>
          </section>
        </div>
      </UploadModal>
    );
  }
}

export default withRouter(Detail);
