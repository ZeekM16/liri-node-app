require("dotenv").config();

var Spotify = require('node-spotify-api');

var axios = require('axios');

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var command = process.argv[2];

var parameter = process.argv.slice(3).join(' ');

// ======= SPOTIFY =================
function spotifyThisSong() {
    spotify.search({
        type: 'track',
        query: parameter,
    })
    .then(function(response){
        var spotifyResponse = response.tracks.items[0];
        var bandName = spotifyResponse.album.artists[0].name;
        
        console.log(spotifyResponse.name);
        
        
        // console.log("Artist: " + bandName);
        // console.log("Song Name: " + songName);
    })
    .catch(function(error){
        console.log(error);
    })
    // axios
    //     .get('https://api.spotify.com/v1/search?q=' + "i want it that way")
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch(function(error){
    //         console.log(error);
    //     })
}


// ========= MOVIE ============



switch (command) {
    case 'spotify-this-song':
        spotifyThisSong()
        break;
    // case 'movie-this'
        // movieThis()
    default:
        console.log('Could not run command');
        break;
}