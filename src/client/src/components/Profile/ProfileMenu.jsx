import React from "react";
import styled from "styled-components";

const ProfileMenuWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  padding: 6px 0;
`;

const ProfileMenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
`;

const ProfileMenuGrid = styled.div`
  display: block;
  background-image: url(/images/icons2.png);
  background-repeat: no-repeat;
  background-size: 337px 298px;
  background-position: ${props =>
    props.selected === "grid" ? "-288px -149px" : "-288px -174px"};
  height: 24px;
  width: 24px;
`;

const ProfileMenuTimeLine = styled.div`
  display: block;
  background-image: url(/images/icons2.png);
  background-repeat: no-repeat;
  background-size: 337px 298px;
  background-position: ${props =>
    props.selected === "tl" ? "-288px -200px" : "-288px -225px"};
  height: 24px;
  width: 24px;
`;

const ProfileMenuSave = styled.div`
  display: block;
  background-image: url(/images/icons2.png);
  background-repeat: no-repeat;
  background-size: 337px 298px;
  background-position: ${props =>
    props.selected === "save" ? "-48px -274px" : "-73px -274px"};
  height: 24px;
  width: 24px;
`;

const ProfileMenuTag = styled.div`
  display: block;
  background-image: url(/images/icons2.png);
  background-repeat: no-repeat;
  background-size: 337px 298px;
  background-position: ${props =>
    props.selected === "tag" ? "-274px -274px" : "-174px -274px"};
  height: 24px;
  width: 24px;
`;

export default class ProfileMenu extends React.Component {
  render() {
    return (
      <ProfileMenuWrapper>
        <ProfileMenuItem>
          <ProfileMenuGrid
            selected={this.props.selected}
            onClick={() => this.props.changeMenu("grid")}
          />
        </ProfileMenuItem>
        <ProfileMenuItem>
          <ProfileMenuTimeLine
            selected={this.props.selected}
            onClick={() => this.props.changeMenu("tl")}
          />
        </ProfileMenuItem>
        <ProfileMenuItem>
          <ProfileMenuSave
            selected={this.props.selected}
            onClick={() => this.props.changeMenu("save")}
          />
        </ProfileMenuItem>
        <ProfileMenuItem>
          <ProfileMenuTag
            selected={this.props.selected}
            onClick={() => this.props.changeMenu("tag")}
          />
        </ProfileMenuItem>
      </ProfileMenuWrapper>
    );
  }
}
