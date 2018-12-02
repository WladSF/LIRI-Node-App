# LIRI

### Overview

This is LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back information (data).

The app can take in one of the following commands:

   * "Concert-this"
   * "Spotify-this-song"
   * "Movie-this"
   * "D0-what-it-says"

### What Each Command Can Do

1. To search for an artist's concert, type in `node liri.js concert-this '<artist name here>'`
    and your search will return:

   * Artist
   * Name of venue
   * Venue location
   * Date of the event

   DEMO : https://drive.google.com/open?id=1Ue78fgzMg5nBj5CQNF49ehgfPh_lMTPk


2. To search for any specific song, type in `node liri.js spotify-this-song '<song name here>'`
    and your search will return:

   * Artist
   * The song's name
   * A preview link of the song from Spotify
   * The album that the song is from

   DEMO : https://drive.google.com/open?id=129A2edLx2DFj9_eJCFaH8o3119nTNypc

   * If no song is provided then the program will default to "The Sign" by Ace of Base.

3. To search for a movie, type in `node liri.js movie-this '<movie name here>'`
    and your search will return:

    * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Rotten Tomatoes Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.

    DEMO : https://drive.google.com/open?id=143YwRY6uAz9-R2Xtv7-sP5yBmkTWZmK1

    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

4. This commnad will search for any of the above search queries: `node liri.js do-what-it-says`

     


