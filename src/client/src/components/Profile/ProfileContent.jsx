import React from "react";
import styled from "styled-components";

const ProfileContentWrapper = styled.div`
    font-size: 20px;
`

export default class ProfileContent extends React.Component {
    render() {
        return (
            <ProfileContentWrapper>
                {this.props.selected} contents
            </ProfileContentWrapper>
    );
  }
}
