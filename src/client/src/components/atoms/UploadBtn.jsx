import React from "react";
import styled from "styled-components";

const UploadBtnWrap = styled.div`
  webkit-box-flex: 1;
  flex-grow: 1;
  height: 100%;
  justify-content: center;
`;

const UploadBtnItem = styled.label`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const UploadBtnIcon = styled.span`
  display: block;
  background-image: url(/images/icons2.png);
  background-repeat: no-repeat;
  background-size: 337px 298px;
  background-position: -288px -75px;
  height: 24px;
  width: 24px;
`;

export default class UploadBtn extends React.Component {
  render() {
    return (
      <UploadBtnWrap>
        <UploadBtnItem htmlFor="image">
          <UploadBtnIcon>
            <input
              type="file"
              id="image"
              name="image"
              ref="image"
              hidden
              onChange={() => {
                // this.sendUpload();
                // this.setState({isDisplay: !this.state.isDisplay});
              }}
            />
          </UploadBtnIcon>
        </UploadBtnItem>
      </UploadBtnWrap>
    );
  }
}
