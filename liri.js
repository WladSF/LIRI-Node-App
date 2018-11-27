// DEPENDENCIES
// =====================================
// Read and set environment variables
require("dotenv").config();

// Import the node-spotify-api NPM package.
var Spotify = require("node-spotify-api");

// Import the API keys
var keys = require("./keys.js");

// Import the axios npm package.
var axios = require("axios");

// Import the moment npm package.
var moment = require("moment");

// Import the FS package for read/write.
var fs = require("fs");

// Store all of the arguments in an array
var nodeArgs = process.argv;

// Create an empty variable for holding the info requested (movie, concert, or song name)
var infoName = "";

// Initialize the spotify API client using my client id and secret
var spotify = new Spotify(keys.spotify);


