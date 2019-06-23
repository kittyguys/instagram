import React from "react";
import Header from "../../organisms/Header";
import FooterContainer from "../../organisms/Footer/FooterContainer";
import axios from "axios";

export default class Top extends React.Component {
  getRequest() {
    axios.post("/users/login", { id: "test", password: "test" }).then(res => {
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
    });
  }
  register() {
    axios
      .post("/users/register", { id: "test2", password: "test2" })
      .then(res => console.log(res.data));
  }
  render() {
    return (
      <>
        {/*!this.props.isLoggedIn && this.props.history.push("/login")*/}
        <Header />
        <FooterContainer />
        <button
          style={{ marginTop: "100px" }}
          onClick={() => {
            this.register();
          }}
        ></button>
      </>
    );
  }
}
