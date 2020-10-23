import React from "react";
import { connect } from "react-redux";
import { SelectSong } from "../actions";

class SongList extends React.Component {
  renderList = () => {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => {
                this.props.SelectSong(song);
              }}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//will always be called with the most updated state after each mutation, that happens through connect() for us.
const mapStateToProps = (state) => {
  //the returned value will be the props of the connected components through connect().
  //the returned value has to be an object.
  return { songs: state.songs };
};

export default connect(mapStateToProps, { SelectSong })(SongList);

//we call the action creator with what we want saved in the state after it's mutation
