import React, { Component } from "react";

export default class NowPlaying extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 4000,
      visible: false,
      image: "",
      name: "",
      artist: "",
    };
  }

  getCurrentlyPlayer(val){
    const name = val.name ||false
    const album = val.album
    const image = album ? album.images[1].url:false
    const artist = album ? album.artist[0].name : ''
    if(image ===false) return false

    return {name, image,artist}
  }

  render() {
    // NowPlaying(val)=>{
    //   const values = this.getCurrentlyPlayer(val)
    //   if(!values){
    //     this.setState({
    //       visible:false
    //     })
    //   }else{
    //     this.setState({
    //       image : values.image,
    //       artist:values.artist,
    //       name:values.name,
    //       visible:true,
          
    //     })
    //   }
    // }

    return (
      // <div className={`now-playing ${this.state.visible ? "visible":""}`}>
      //   <img src = {this.state.image}/>
      //   <div className="text" style={{color:this.state.color || 'black'}}>
      //     <div className="name">{this.state.name}</div>
      //     <div className="artist">{this.state.artist}</div>
      //   </div>
      // </div>
      <div>Hello this is nowplayer</div>
    );
  }
}
