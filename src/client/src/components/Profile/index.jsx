import React from "react";
import styled from "styled-components";
import ProfileHeader from "../Header/ProfileHeader";
import ProfileMain from "./ProfileMain";
import ProfileStatus from "./ProfileStatus";
import ProfileMenu from "./ProfileMenu";
import FooterContainer from "../../containers/FooterContainer";
import ProfileContent from "./ProfileContent";

export default class Profile extends React.Component {
	componentDidMount() {
		this.props.fetchUserStart(this.props._id);
	}
  render() {
    return (
      <div>
        <ProfileHeader id={this.props.id} />
					<ProfileMain id={this.props.id} avater={this.props.avater} />
					<ProfileStatus photos={this.props.photos} follow={this.props.follow} follower={this.props.follower} />
					<ProfileMenu selected={this.props.selected} changeMenu={this.props.changeMenu} />
          <ProfileContent selected={this.props.selected} />
        <FooterContainer />
      </div>
    );
  }
}
