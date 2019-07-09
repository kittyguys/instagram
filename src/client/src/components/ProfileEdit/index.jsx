import React from "react";
import styled from "styled-components";
import ProfileEditHeader from "../Header/ProfileEditHeader";
import ProfileEditMain from "./ProfileEditMain";
import ProfileEditForm from "../Form/ProfileEditForm";
import AvatarModal from "./AvatarModal";
import FooterContainer from "../../containers/FooterContainer";

export default class Edit extends React.Component {
  render() {
    return (
      <div>
        {!this.props.modal ? <div><ProfileEditHeader />
          <ProfileEditMain id={this.props.id} avater={this.props.avater} changeModal={(imageSrc, imageFile, modal) => this.props.changeModal(imageSrc, imageFile, modal)} />
          <ProfileEditForm 
            onSubmit={values => this.props.profileEditStart(values, this.props._id)}
            id={this.props.id}
            desc={this.props.desc}
            mail={this.props.mail}
            tel={this.props.tel}
            sex={this.props.sex}
          /></div> : <AvatarModal _id={this.props._id} imageFile={this.props.imageFile} imageSrc={this.props.imageSrc} changeModal={(imageSrc, imageFile, modal) => this.props.changeModal(imageSrc, imageFile, modal)} />}
        <FooterContainer />
      </div>
    );
  }
}
