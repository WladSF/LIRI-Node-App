// DEPENDENCIES
// =====================================
// Read and set environment variables
require("dotenv").config();

// Import the node-spotify-api npm package
var Spotify = require("node-spotify-api");

// Import the API keys and the axios, request, moment, and fs npm packages
// var request = require("request");
var moment = require("moment");
var keys = require("./keys.js");
var axios = require("axios");
var fs = require("fs");

// Initialize the spotify API client using client id and secret
var spotify = new Spotify(keys.spotify);

// Take two arguments : first is the action (ex:movie-this), second is the info required (ex:song)
var action = process.argv[2];
var info = process.argv.slice(3).join(" ");


// SWITCH CASE statement, it will direct which function to run
//===================================

function infoSearch(action, info) {
  switch (action) {

    case "movie-this":
      movie(info)
      log(action, info)
      break;

    case "spotify-this-song":
      song(info)
      log(action, info)
      break;

    case "concert-this":
      concert(info)
      log(action, info)
      break;

    case "do-what-it-says":
      doIt(info)
      log(action, info)
      break;
  }
};

//Spotify API call
//====================================

function song(music) {

  if (music.length === 0) {
    music = 'The Sign'
  }

  spotify.search({ type: 'track', query: music, limit: 1 }, function (err, data) {

    if (err) {
      return console.log('Error occurred: ' + err);
    }

    console.log("==================" + "\n");
    console.log("Artist: " + data.tracks.items[0].artists[0].name);
    console.log("Song Name: " + data.tracks.items[0].name);
    console.log("Link: " + data.tracks.items[0].external_urls.spotify);
    console.log("Album Name: " + data.tracks.items[0].album.name);
    console.log("\n" + "==================" + "\n");

  });
};

//OMDB API call
//====================================

function movie(title) {

  if (title.length === 0) {
    title = 'Mr. Nobody'
  }

  axios.get("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy")    //Run the request with axios module on a URL with a JSON
    .then(function (response) {                                                        // Then print out the movie data                                            
      // console.log(response.data);

      console.log("==================" + "\n");
      console.log("Title: " + response.data.Title);
      console.log("Year Released: " + response.data.Year);
      console.log("IMDB Rating: " + response.data.imdbRating);
      console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value)
      console.log("Country: " + response.data.Country)
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
      console.log("\n" + "==================" + "\n");
    })

    .catch(function (error) {
      if (error.response) {                                                           // The request was made and the server responded with a status code
        console.log(error.response.data);                                             // that falls out of the range of 2xx      
      }
    })
};

//Bands in Town API call
//=====================================

function concert(artist) {
  axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then(function (response) {

      if (response.data.length <= 0) {
        console.log("No available information for this artist. Try again.")
      }

      console.log("==================" + "\n");
      console.log("Artist: " + response.data[0].lineup[0])
      console.log("Venue: " + response.data[0].venue.name)
      console.log("City: " + response.data[0].venue.city);
      console.log("State : " + response.data[0].venue.region);
      console.log("Date: " + moment(response.data[0].datetime).format('L'));
      console.log("\n" + "==================" + "\n");
    }
    );
};

//"DO WHAT IT SAYS"
//======================================

function doIt() {
  fs.readFile("random.txt", "utf8", function (error, data) {
    if (error) {
      return console.log(error);
    }
    else {
      var dataArr = data.split(",");
      console.log(dataArr);                                     // Information to be searched
      infoSearch(dataArr[0], dataArr[1]);
    }
  })
};

//Bonus
//=======================================

var log = function (action, info) {
  fs.appendFile("log.txt", action + ", " + info + "\n", function (err) {
    if (err) return console.log(err)
  })
  console.log("Action: " + action + " || Info: " + info + "\n")
};

infoSearch(action, info)