import React, { Component } from "react";
import WaveSync from "../wavesync";
import { get } from "../util/network";
import "../css/finalhome.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
    this.auth = this.auth.bind(this);
    this.container = React.createRef();
  }

  async auth() {
    const { data } = await get(`http://localhost:4000/auth`);
    this.setState({ loading: true });
    var container = document.getElementById("animationed");
    // console.log(data);
    container.addEventListener("animationend", () => {
      window.location.href = `http://localhost:4000/login?auth_id=${data.auth_id}`;
    });
  }

  componentDidMount() {
    this.wavesync = new WaveSync({ fixed: true });
  }

  render() {
    return (
      <div
        className={`home ${this.state.loading ? " loading" : ""}`}
        ref={this.container}
        id="animationed"
      >
        <div className="text">
          <h1>
            <i>w</i>
            <i>a</i>
            <i>v</i>
            <i>y</i>
          </h1>
          <h2>a spotify Visualizer</h2>
          <button onClick={this.auth}>Login</button>
        </div>
      </div>
    );
  }
}
