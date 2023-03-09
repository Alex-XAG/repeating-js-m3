//  Methods of object ang 'this' при обращении к свойствам в методах

// - changeName
// - addTrack
// - updateRating
// - getTrackCount

// Creation of object////////////////////////////////
const playlist = {
  name: " My super playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  //   trackCount: 3, // it is countable var, so we need to count this meaning by method

  //   getName() {
  //     console.log("Aha this is getName!!!"); /// Actually syntax!!!!!!!!
  //   },
  changeName(newName) {
    this.name = newName;
  },

  addTrack(track) {
    this.tracks.push(track);
    // this.trackCount = this.tracks.length; //// changing trackCount after push new track in the array tracks/ THIS IS BAD DECISION!!!!!!!!!
  },

  updateRating(newRating) {
    this.rating = newRating;
  },

  getTrackCount() {
    return this.tracks.length;
  },
};

// console.log(playlist);
playlist.changeName("new Name");
// console.log(playlist);

// console.log(playlist.tracks);
playlist.addTrack("new Track");
// console.log(playlist.tracks);

console.log(playlist);
playlist.updateRating(6);
console.log(playlist);
