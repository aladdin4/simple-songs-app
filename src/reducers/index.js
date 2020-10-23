import { combineReducers } from "redux";

//this is a primitive reducer for testing purposes, it will always construct the state as it is and will never mutate it.
const songsReducer = () => {
  return [
    { title: "my song no. 1 ", duration: " 4 min" },
    { title: "my song no. 2 ", duration: " 3 min" },
    { title: "my song no. 3 ", duration: " 2 min" },
    { title: "my song no. 4 ", duration: " 1 min" },
  ];
};

//sub-reducer() that will return an action object.
const selectedSongReducer = (selectedSong = "test", action) => {
  if (action.type === "SONG_SELECTED") {
    //payload is the mutated result of state.
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  //keys are state keys, and state values are the returned values of reducers mentioned here in the same order.
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
