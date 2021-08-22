import React, { Component } from "react";
import "../css/status.css";
export default class Status extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="status">
        <div className={`loading msg ${this.props.loaded ? "" : "visible"}`}>
          <h2 className="status-heading">loading, one moment please</h2>
        </div>
        <div className={`no-playback msg ${this.props.noPlayback ? "visible" : ""}`}>
          <h2 className="status-heading">no playback detected</h2>
        </div>
      </div>
    );
  }
}
