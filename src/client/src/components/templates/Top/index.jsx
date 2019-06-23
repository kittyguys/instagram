import React from "react";
import styled from "styled-components";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
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
        <button
          style={{ position: "relative", zIndex: 100 }}
          onClick={() => this.getRequest()}
        >
          JWT
        </button>
        <button
          style={{ position: "relative", zIndex: 100 }}
          onClick={() => this.register()}
        >
          登録
        </button>
        <Footer />
      </>
    );
  }
}
