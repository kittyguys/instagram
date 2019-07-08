import React from "react";
import styled from "styled-components";
import ProfileEditHeader from "../Header/ProfileEditHeader";
import ProfileEditMain from "./ProfileEditMain";
import ProfileEditForm from "../Form/ProfileEditForm";
import FooterContainer from "../../containers/FooterContainer";

export default class Edit extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ProfileEditHeader />
          <ProfileEditMain id={this.props.id} avater={this.props.avater} />
          <ProfileEditForm 
            onSubmit={values => this.props.profileEditStart(values, this.props._id)}
            id={this.props.id}
            desc={this.props.desc}
            mail={this.props.mail}
            tel={this.props.tel}
            sex={this.props.sex}
          />
        <FooterContainer />
      </div>
    );
  }
}
