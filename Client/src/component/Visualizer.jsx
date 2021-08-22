import React, { Component } from "react";
import Status from "./Status.jsx";
import NowPlaying from "./NowPlaying.jsx";
import WaveSync from "../wavesync";

export default class Visualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      noPlayback: false,
      nowPlaying: {
        image: "",
        name: "",
        artist: "",
      },
    };
  }

  componentDidMount() {
    this.waveSync = new WaveSync();
    this.waveSync.sync.watch("active", () => {
      this.setState({
        loaded: true
      });
    });
    this.waveSync.sync.watch("noPlayback", (val) => {
      this.setState({
        noPlayback: val
      });
    });
    this.waveSync.sync.watch("currentlyPlaying", (val) => {
      this.setState({
        nowPlaying: val
      });
    });
  }
  render() {
    return (
      <div className="visualizer">
        <Status loaded={this.state.loaded} noPlayback={this.state.noPlayback} />
        <NowPlaying nowPlaying={this.state.nowPlaying} />
        {/* this is fun */}
      </div>
    );
  }
}
