import React from "react";
import "../css/timeline.css";
export default class Timeline extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper-border">
          <div className="blob"></div>
        </div>
        <div>
          <div className="blob2"></div>
        </div>
        <div>
          <div className="blob3"></div>
        </div>
        <div className="wrapper">
          <section>
            <div className="main-title">
              <p className="main-heading-title">
                Peek into project developement
              </p>
            </div>
          </section>
          <section className="block">
            <div className="each-year">
              <div className="title">Aug 2021</div>
              <div className="each-event">
                <p>
                  <i>Aug 12</i>
                </p>
                <br />
                <div className="event-description">
                  <p>Project Ideation</p>
                  <p className="success">
                    Brainstorming different Ideas and problems to solve.
                  </p>
                </div>
              </div>

              <div className="each-event">
                <p>
                  <i>Aug 13</i>
                </p>
                <br />
                <div className="event-description">
                  <p>Tech Stack</p>
                  <p className="success">
                    Discussing the tech stack and functionalities for learning
                    and implementing it.
                  </p>
                </div>
              </div>

              <div className="each-event">
                <p>
                  <i>Aug 14</i>
                </p>
                <br />
                <div className="event-description">
                  <p className="success">
                    Finalized the basic structure of website and divided the
                    work between team members
                  </p>
                </div>
              </div>

              <div className="each-event">
                <p>
                  <i>Aug 15 - Aug 17</i>
                </p>
                <br />
                <div className="event-description">
                  <p className="error">Started Coding.</p>
                </div>
              </div>

              <div className="each-event">
                <p>
                  <i>Aug 18 - Aug 19</i>
                </p>
                <br />
                <div className="event-description">
                  <p>
                    Had new ideas for UI and Animations and tried implementing
                    them.{" "}
                    <span className="error">
                      (Did'nt realized our CSS was loosely coupled)
                    </span>
                  </p>
                </div>
              </div>

              <div className="each-event">
                <p>
                  <i>Aug 20</i>
                </p>
                <br />
                <div className="event-description success">
                  <p>UI looks great</p>
                  <p>Happy with the results</p>
                </div>
              </div>

              <div className="each-event">
                <p>
                  <i>Aug 21</i>
                </p>
                <br />
                <div className="event-description">
                  <p>
                    Started Facing problems with 3rd party JS library in react{" "}
                    <span className="error">(ScrollMagic, TweenMax, GSAP)</span>
                  </p>
                </div>
              </div>

              <div className="each-event">
                <p>
                  <i>Aug 22</i>
                </p>
                <br />
                <div className="event-description">
                  <p className="error" style={{ padding: "20px" }}>
                    <ul>
                      <li>
                        Started integrating project files from different
                        members, Whole website broke
                      </li>
                      <li style={{ color: "green" }}>
                        Rolledback complex animations and wrote native CSS and
                        JS
                      </li>
                      <li>DNS not did not update on time.</li>
                    </ul>
                  </p>
                </div>
              </div>

              <div className="each-event">
                <p>
                  <i>Aug 23</i>
                </p>
                <br />
                <div className="event-description">
                  <p className="error" style={{ padding: "20px" }}>
                    <ul>
                      <li>
                        Discovered CORS issue related to cookies while
                        redirecting from Server to Client
                      </li>
                      <li className="success">
                        Changed the architecture for deploying ; Re-Deployed
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
