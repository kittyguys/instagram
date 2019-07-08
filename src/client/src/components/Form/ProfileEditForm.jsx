import React from "react";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";

const ProfileEditFormBox = styled.div`
  padding: 0 20px 0;
`;

const InputWrap = styled.div`
  padding-top: 20px;
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
  border: 1px solid #ddd;
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
  text-overflow: ellipsis;
  background: #fafafa;
  width: 100%;
  box-sizing: border-box;
	height: 100%;
	padding: 6px;
`;

const RadioInput = styled.input`
`;

const RadioBox = styled.div`
	padding-top: 20px;
`

const Label = styled.label`
	display: block;
	font-weight: bold;
`;

const ButtonWrap = styled.div`
  margin-top: 14px;
`;

const Button = styled.button`
  appearance: none;
  background: 0 0;
  border: 0;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  font-weight: 600;
  padding: 4px 6px;
  text-align: center;
  text-transform: inherit;
  text-overflow: ellipsis;
  user-select: none;
  background-color: #3897f0;
  border: 1px solid #3897f0;
  border-radius: 4px;
  color: #fff;
  position: relative;
  font-size: inherit;
`;

const validate = values => {
  const errors = {};
  // if (!values.uid) {
  //   errors.uid = "Required";
  // } else if (values.uid.length > 10) {
  //   errors.uid = "Must be 10 characters or less";
  // }
  // if (!values.upass) {
  //   errors.upass = "Required";
  // } else if (values.upass.length > 10) {
  //   errors.upass = "Must be 10 characters or less";
  // }
  return errors;
};

const renderField = ({ input, placeholder, label, type, meta: { touched, error } }) => (
  <InputWrap>
    <Label htmlFor={label}>{label}</Label>
    <InputBox>
      <InputInner>
        <Input {...input} type={type} name={label} placeholder={placeholder} />
      </InputInner>
    </InputBox>
    {touched && error && <div>{error}</div>}
  </InputWrap>
);

const renderSexField = ({ input, label, type, meta: { touched, error } }) => (
  <label><RadioInput {...input} type={type} name="sex" />{label}</label>
);

const ProfileEditForm = props => {
  const { handleSubmit, submitting, onSubmit } = props;
  return (
      <ProfileEditFormBox>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            name="id"
            type="text"
            component={renderField}
						label="ユーザーネーム"
						placeholder={props.id}
          />
          <Field
            name="desc"
            type="text"
            component={renderField}
						label="自己紹介"
						placeholder={props.desc}
          />
        	<Field
            name="mail"
            type="text"
            component={renderField}
						label="メールアドレス"
						placeholder={props.mail}
          />
        	<Field
            name="tel"
            type="text"
            component={renderField}
						label="電話番号"
						placeholder={props.tel}
          />
					<RadioBox>
					<Label>性別</Label>
						<Field
							name="sex"
							type="radio"
							component={renderSexField}
							label="男性"
							value="male"
						/>
						<Field
							name="sex"
							type="radio"
							component={renderSexField}
							label="女性"
							value="female"
						/>
						<Field
							name="sex"
							type="radio"
							component={renderSexField}
							label="答えたくない"
							value="none"
						/>
					</RadioBox>
          <ButtonWrap>
            <Button type="submit">
              送信する
            </Button>
          </ButtonWrap>
        </form>
      </ProfileEditFormBox>
  );
};

export default reduxForm({
  form: "profileEdit",
	validate,
	enableReinitialize : true
})(ProfileEditForm);
