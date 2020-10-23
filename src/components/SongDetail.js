import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
  console.log("hello from <SongDetail/> ", props);
  return (
    <div>
      {props.song.title} <br /> {props.song.duration}
    </div>
  );
};

//will be called by connect() and the whole state object as argument, and should return an object that will be the props of the connected component.
const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
