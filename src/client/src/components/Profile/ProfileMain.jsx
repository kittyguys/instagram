import React from "react";
import styled from "styled-components";

const ProfileMainWrapper = styled.div`
	padding-top: 70px;
  display: flex;
	align-items: center;
`;

const ProfileAvater = styled.div`
	width: 70px;
	height: 70px;
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

const ProfileEdit = styled.div`
	display: inline-block;
	height: 26px;
	line-height: 26px;
	text-align: center;
	border: 1px solid #ddd;
	margin-top: 10px;
	text-align: center;
	width: 100%;
	border-radius: 4px;
`


export default class ProfileMain extends React.Component {
    render() {
		const { id, avater } = this.props;
        return (
            <ProfileMainWrapper>
                <ProfileAvater>
                    <img src="" alt=""/>
                </ProfileAvater>
                <ProfileNameBox>
                    <ProfileName>{id}</ProfileName>
                    <ProfileEdit>プロフィールを編集</ProfileEdit>
                </ProfileNameBox>
            </ProfileMainWrapper>
    );
  }
}
