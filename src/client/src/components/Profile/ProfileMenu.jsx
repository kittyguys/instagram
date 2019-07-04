import React from "react";
import styled from "styled-components";

const ProfileMenuWrapper = styled.div`
    display: flex;
    border-bottom: 1px solid #eee;
    padding: 6px 0;
`

const ProfileMenuItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
`

const ProfileMenuGrid = styled.div`
    display: block;
    background-image: url(/images/icons2.png);
    background-repeat: no-repeat;
    background-size: 337px 298px;
    background-position: -288px -174px;
    height: 24px;
    width: 24px;
`

const ProfileMenuTimeLine = styled.div`
    display: block;
    background-image: url(/images/icons2.png);
    background-repeat: no-repeat;
    background-size: 337px 298px;
    background-position: -288px -224px;
    height: 24px;
    width: 24px;
`

const ProfileMenuSave = styled.div`
    display: block;
    background-image: url(/images/icons2.png);
    background-repeat: no-repeat;
    background-size: 337px 298px;
    background-position: -100px -274px;
    height: 24px;
    width: 24px;
`

const ProfileMenuTag = styled.div`
    display: block;
    background-image: url(/images/icons2.png);
    background-repeat: no-repeat;
    background-size: 337px 298px;
    background-position: -174px -274px;
    height: 24px;
    width: 24px;
`

export default class ProfileMenu extends React.Component {
    render() {
        return (
            <ProfileMenuWrapper>
                <ProfileMenuItem><ProfileMenuGrid /></ProfileMenuItem>
                <ProfileMenuItem><ProfileMenuTimeLine /></ProfileMenuItem>
                <ProfileMenuItem><ProfileMenuSave /></ProfileMenuItem>
                <ProfileMenuItem><ProfileMenuTag /></ProfileMenuItem>
            </ProfileMenuWrapper>
    );
  }
}
