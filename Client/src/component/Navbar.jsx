import React, { Component } from "react";
import "../css/navbar.css";
// import "../vendor/navbar";

export default class Navbar extends Component {
  componentDidMount() {
    const toggler = document.querySelector(".menu__toggler");
    const menu = document.querySelector(".menu");

    toggler.addEventListener("click", () => {
      toggler.classList.toggle("active");
      menu.classList.toggle("active");
    });
  }
  render() {
    return (
      <>
        <div className="menu">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/timeline">Timeline</a>
        </div>
        <div className="menu__toggler">
          <span></span>
        </div>
      </>
    );
  }
}
