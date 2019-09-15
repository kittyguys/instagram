import React from "react";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router";

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
        <UploadBtnItem htmlFor="photo">
          <UploadBtnIcon>
            <Field
              name="blobUrl"
              component={props => {
                return (
                  <>
                    <input
                      id="photo"
                      type="file"
                      hidden
                      onChange={e => {
                        // こうしないと history.push が使えなかった
                        props.input.onChange(() => {
                          const createObjectURL =
                            (window.URL || window.webkitURL).createObjectURL ||
                            window.createObjectURL;
                          const files = e.target.files[0];
                          const reader = new FileReader();
                          reader.onload = e => {
                            const base64Photo = e.target.result;
                            const blobUrl = createObjectURL(files);
                            this.props.history.push({
                              pathname: "/create/details",
                              state: { blobUrl, base64Photo }
                            });
                          };
                          reader.readAsDataURL(files);
                        });
                      }}
                    />
                  </>
                );
              }}
            />
          </UploadBtnIcon>
        </UploadBtnItem>
      </UploadBtnWrap>
    );
  }
}

export default reduxForm({
  form: "photo"
})(withRouter(UploadBtn));
