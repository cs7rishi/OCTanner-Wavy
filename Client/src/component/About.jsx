import React, { Component } from "react";
import "../css/about.css";

export default class About extends Component {
  componentDidMount() {}
  render() {
    return (
      <>
        <section className="about-container">
          <div className="about-info">
            <h1 className="about-title">Meet Sam & Rishi</h1>
            <p>
              We work togerther to design, create and produce work that we are
              proud of. We are available for hire in wide range of creative
              disciplines for a variety of jobs, projects.
            </p>

            <h1 className="about-title">Connect With Us</h1>
            <p>
              sameer.gautam_cs18@gla.ac.in
              <br />
              <span className="about-phone">+91-7983964045</span>
              <br />
              rishi.singh_cs18@gla.ac.in
              <br />
              <span className="about-phone">+91-7302188849</span>
            </p>
          </div>
          <div className="about-pic-ctn">
            <img
              src="https://picsum.photos/200/300?t=1"
              alt=""
              className="about-pic"
            />
            <img
              src="https://picsum.photos/200/300?t=2"
              alt=""
              className="about-pic"
            />
            <img
              src="https://picsum.photos/200/300?t=3"
              alt=""
              className="about-pic"
            />
            <img
              src="https://picsum.photos/200/300?t=4"
              alt=""
              className="about-pic"
            />
            <img
              src="https://picsum.photos/200/300?t=5"
              alt=""
              className="about-pic"
            />
          </div>
        </section>
      </>
    );
  }
}
