//action creator, that receives a piece of the -(songs array of objects)- and return clean object of action to be consumed by the reducers
export const SelectSong = (song) => {
  return {
    type: "SONG_SELECTED",
    //the payload is what actually saved as value in the state eventually.
    payload: song,
  };
};
