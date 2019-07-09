import React from "react";
import styled from "styled-components";
import axios from "axios";
import { withRouter } from "react-router";

const ProfileEditMainWrapper = styled.div`
	padding-top: 54px;
    display: flex;
	align-items: center;
`;

const ProfileEditAvater = styled.div`
	width: 48px;
	height: 48px;
	border: 2px solid #eee;
	border-radius: 50%;
	margin: 0 18px;
`;

const ProfileNameBox = styled.div`
	display: block;
	width: 58%;
`
const ProfileName = styled.div`
	display: block;
	font-size: 20px;
`

const ProfileAvaterEdit = styled.div`
    display: inline-block;
    font-size: 12px;
    color: blue;
	width: 100%;
	cursor: pointer;
`

const AvatarImage = styled.img`
	width: 100%;
`

const AvatarUpload = styled.input`
	display: none;
	cursor: pointer;
`

const AvatarUploadLabel = styled.label`
	color: #1e90ff;	
	font-size: 12px;
`


class ProfileEditMain extends React.Component {
	handleChange(e) {
		const file = e.target.files.item(0);
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			this.props.changeModal(reader.result, file, true)
		}
	}
    render() {
		const { id, avater } = this.props;
        return (
            <ProfileEditMainWrapper>
                <ProfileEditAvater>
                    <AvatarImage src={avater} alt=""/>
                </ProfileEditAvater>
                <ProfileNameBox>
                    <ProfileName>{id}</ProfileName>
					<AvatarUploadLabel htmlFor="avatar">プロフィール写真を変更する</AvatarUploadLabel>
					<AvatarUpload type="file" id="avatar" name="avatar" onChange={e => this.handleChange(e)} />
                </ProfileNameBox>
            </ProfileEditMainWrapper>
    );
  }
}

export default withRouter(ProfileEditMain)