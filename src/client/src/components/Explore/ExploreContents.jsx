import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";

const ListWrapper = styled.div``;

const ListItem = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`;

const AvatarWrapper = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 14px;
  overflow: hidden;
`;

const Avatar = styled.img`
  width: 100%;
`;

const Name = styled.div`
  font-size: 16px;
`;

class ExploreContents extends React.Component {
  render() {
    return (
      <div>
        <ListWrapper>
          {this.props.userList.map(user => {
            return (
              <ListItem
                key={user._id}
                onClick={() =>
                  this.props.history.push({
                    pathname: "/explore/profile",
                    state: { _id: user._id }
                  })
                }
              >
                <AvatarWrapper>
                  <Avatar src={user.avater} />
                </AvatarWrapper>
                <Name>{user.id}</Name>
              </ListItem>
            );
          })}
        </ListWrapper>
      </div>
    );
  }
}

export default withRouter(ExploreContents);
