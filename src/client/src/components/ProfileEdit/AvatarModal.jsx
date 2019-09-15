import React from "react";
import styled from "styled-components";
import axios from "axios";
import { withRouter } from "react-router";

const ModalWrapper = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  padding-top: 44px;
`;

const ModalHeader = styled.div`
  &::before {
    background-color: rgba(0, 0, 0, 0.0975);
    bottom: -1px;
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    right: 0;
  }

  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  font-weight: 600;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
  flex-direction: column;
`;

const MoadalHeaderInner = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  justify-content: space-between;
  padding: 0 16px;
`;

const CloseBtnWrap = styled.div`
  flex-basis: 20%;
  flex-direction: row;
`;

const CloseBtnItem = styled.button`
  background: 0 0;
  border: 0;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 14px;
  line-height: 18px;
`;

const CloseBtnIcon = styled.span`
  display: block;
  background-image: url(/images/icons2.png);
  background-repeat: no-repeat;
  background-size: 337px 298px;
  background-position: 0px -248px;
  height: 24px;
  width: 24px;
  transform: rotate(45deg);
  cursor: pointer;
`;

const SendBtn = styled.div`
  color: #1e90ff;
  cursor: pointer;
  font-size: 14px;
`;

class AvatarModal extends React.Component {
  sendFile() {
    // const param = new FormData();
    // param.append('avatar', this.props.imageFile);
    // param.append('_id', this.props._id);

    const param = {
      avatar: this.props.imageSrc,
      _id: this.props._id
    };

    axios.post(`${process.env.API_PATH}/users/avatar`, param).then(result => {
      console.log(result.data.user);
      this.props.changeModal("", "", false);
      this.props.history.push("/profile");
    });
  }
  render() {
    return (
      <ModalWrapper>
        <ModalHeader>
          <MoadalHeaderInner>
            <CloseBtnWrap>
              <CloseBtnItem>
                <CloseBtnIcon
                  onClick={() => this.props.changeModal("", "", false)}
                />
              </CloseBtnItem>
            </CloseBtnWrap>
            <div style={{ fontSize: 14 }}>プロフィール写真</div>
            <SendBtn onClick={() => this.sendFile()}>保存する</SendBtn>
          </MoadalHeaderInner>
        </ModalHeader>
        <img style={{ width: "100%" }} src={this.props.imageSrc} alt="" />
      </ModalWrapper>
    );
  }
}

export default withRouter(AvatarModal);
