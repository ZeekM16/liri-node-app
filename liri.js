require("dotenv").config();

var Spotify = require('node-spotify-api');

var axios = require('axios');

var keys = require("./keys.js");

// var moment = require('moment');

var spotify = new Spotify(keys.spotify);

var command = process.argv[2];

var parameter = process.argv.slice(3).join(' ');


switch (command) {
    case 'spotify-this-song':
        spotifyThisSong()
        break;
    case 'movie-this':
        movieThis()
        break;
    case 'concert-this':
        concertThis();
        break;
    case 'do-what-it-says':
        doWhatItSays();
        break;
    default:
        console.log('Could not run command');
        break;
        

        // ======= SPOTIFY =================
        function spotifyThisSong() {
            spotify.search({
                type: 'track',
                query: parameter,
            })
                .then(function (response) {
                    var spotifyResponse = response.tracks.items[0];
                    // var bandName = spotifyResponse.album.artists[0].name;


                    console.log(spotifyResponse.name);

                    console.log("Artist: " + spotifyResponse[0].artists[0].name);
                    console.log("Song Name: " + spotifyResponse[0].name);
                    console.log("Preview Link: " + spotifyResponse[0].preview_url);
                    console.log("Album: " + spotifyResponse[0].album.name);

                })
                .catch(function (error) {
                    console.log(error);
                })
            axios
            .get('https://api.spotify.com/v1/search?q=' + "i want it that way")
            .then(function (response) {
                console.log(response);
            })
            .catch(function(error){
                console.log(error);
            })
        }


    // ========= MOVIE ============
    // function movieThis(movieName) {
    //     if (movieName) {
    //         movieName = 'Mr. Nobody';
    //     }
    //     // var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    // }

    // axios.get(queryUrl).then(
    //     function (response) {
    //         if (movieName) {
    //             movieName = 'Mr. Nobody';
    //         } console.log(response.data)



    //     }
    // );

    //========== Bands ============
    // function concertThis(artist) {



}