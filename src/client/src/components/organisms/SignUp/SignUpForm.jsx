import React from "react";
import styled from "styled-components";
import Title from "../../atoms/Title";
import LoginLink from "../../atoms/LoginLink";
import { Field, reduxForm } from "redux-form";

const LoginFormWrap = styled.form`
  color: #262626;
  flex-grow: 1;
  justify-content: center;
  margin-top: 12px;
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
  font-size: 14px;
  line-height: 18px;
  padding: 10px;
  box-sizing: border-box;
`;

const LoginFormBox = styled.div`
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 1px;
  margin: 0 0 10px;
  padding: 10px 0;
`;

const InputWrap = styled.div`
  align-items: stretch;
  border: 0 solid #000;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
  position: relative;
  margin: 0 40px 6px;
`;

const InputBox = styled.div`
  align-items: center;
  border-radius: 3px;
  box-sizing: border-box;
  color: #262626;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  position: relative;
  width: 100%;
  border: 1px solid #efefef;
`;

const InputInner = styled.div`
  flex: 1 0 0;
  padding: 0;
  position: relative;
  margin: 0;
  min-width: 0;
`;

const Input = styled.input`
  font-size: 12px;
  border: 0;
  flex: 1 0 0px;
  margin: 0;
  outline: 0;
  overflow: hidden;
  padding: 14px 0 2px 8px;
  text-overflow: ellipsis;
  background: #fafafa;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
`;

const Label = styled.label`
  color: #999;
  font-size: 12px;
  height: 36px;
  left: 8px;
  line-height: 36px;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-overflow: ellipsis;
  transform-origin: left;
  transition: transform ease-out 0.1s;
  user-select: none;
  white-space: nowrap;
  transform: scale(0.83333) translateY(-10px);
`;

const ButtonWrap = styled.div`
  margin: 8px 40px 22px;
`;

const Button = styled.button`
  appearance: none;
  background: 0 0;
  border: 0;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
  text-transform: inherit;
  text-overflow: ellipsis;
  user-select: none;
  width: 100%;
  background-color: #3897f0;
  border: 1px solid #3897f0;
  border-radius: 4px;
  color: #fff;
  position: relative;
  font-size: inherit;
`;

const ErrMessage = styled.p`
  color: #ed4956;
  margin: 0 40px 6px;
  text-align: center;
`;

const validate = values => {
  const errors = {};
  if (!values.uid) {
    errors.uid = "Required";
  } else if (values.uid.length > 10) {
    errors.uid = "Must be 10 characters or less";
  }
  if (!values.upass) {
    errors.upass = "Required";
  } else if (values.upass.length > 10) {
    errors.upass = "Must be 10 characters or less";
  }
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <InputWrap>
    <InputBox>
      <InputInner>
        <Label htmlFor={label}>{label}</Label>
        <Input {...input} type={type} name={label} />
        {touched && error && <div>{error}</div>}
      </InputInner>
    </InputBox>
  </InputWrap>
);

const SignUpForm = props => {
  const { handleSubmit, submitting, onSubmit } = props;
  return (
    <LoginFormWrap onSubmit={handleSubmit(onSubmit)}>
      <LoginFormBox>
        <Title />
        <div>
          {props.errMessage && (
            <ErrMessage>ユーザーネームまたはパスワードが無効です。</ErrMessage>
          )}
        </div>
        <div>
          <Field
            name="uid"
            type="text"
            component={renderField}
            label="ユーザーネーム"
          />
          <Field
            name="upass"
            type="text"
            component={renderField}
            label="パスワード"
          />
          <ButtonWrap>
            <Button type="submit" disabled={submitting}>
              登録する
            </Button>
          </ButtonWrap>
        </div>
      </LoginFormBox>
      <LoginFormBox>
        <LoginLink />
      </LoginFormBox>
    </LoginFormWrap>
  );
};

export default reduxForm({
  form: "signup",
  validate
})(SignUpForm);
