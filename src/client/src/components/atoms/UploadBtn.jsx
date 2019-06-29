import React from "react";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";
import FieldFileInput from "./InputField";

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

class UploadBtn extends React.Component {
  render() {
    return (
      <UploadBtnWrap>
        <UploadBtnItem htmlFor="image">
          <UploadBtnIcon>
            <Field name="picture" component={FieldFileInput} type="file" />
          </UploadBtnIcon>
        </UploadBtnItem>
      </UploadBtnWrap>
    );
  }
}

export default reduxForm({
  form: "photo"
})(UploadBtn);
