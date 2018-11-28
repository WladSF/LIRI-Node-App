// DEPENDENCIES
// =====================================
// Read and set environment variables
require("dotenv").config();

// Import the node-spotify-api NPM package
var Spotify = require("node-spotify-api");

// Import the API keys
var keys = require("./keys.js");

// Import the axios npm package
var axios = require("axios");

// Import the moment npm package
var moment = require("moment");

// Import the FS package for read/write
var fs = require("fs");

// Initialize the spotify API client using my client id and secret
var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret
});

// Take two arguments
// The first will be the action (i.e. "movie-this", "spotify-this-song", etc.)
// The second will be the info/data requested (artist, song, movie)
var action = process.argv[2];
var info = process.argv[3];

// Then create a switch-case statement
// The switch-case will direct which function gets run
switch (action) {
  case "movie-this":
    movie();
    break;

  case "spotify-this-song":
    song();
    break;

  case "concert-this":
    concert();
    break;

  case "do-what-it-says":
    doit();
    break;
}

//If the 'movie' function is called
function movie() {
  axios.get("http://www.omdbapi.com/?i=" + info + "tt3896198&apikey=747984b8")
    .then(function (response) {                //Run the request with axios module on a URL with a JSON
      // Then print out the movie data
      console.log(response.data);
    })

    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
      }
    })
};

function song() {
  spotify
    .search({ type: 'track', query: 'All the Small Things' })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    })
};

function concert() {
  axios.get("https://rest.bandsintown.com/artists/metallica/events?app_id=0812d757d74cda083af32c9fe2e9da9b")
    .then(function (response) {
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    })
};