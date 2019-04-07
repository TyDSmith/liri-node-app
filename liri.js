require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require('moment');

var verb = process.argv[2];
var noun = process.argv[3];
liri();

function liri(){

    if(verb === "spotify-this"){
        var spotifyNoun = noun;
 
        if(noun === undefined){
            var spotifyNoun = 'The Sign Ace of Base';
        }

        spotify.search({ type: 'track', query: spotifyNoun, limit: 20}, function(err, data) {
            if (err) {
              return console.log('Woops! An error occurred: ' + err);
            }
            for (i=0; i < data.tracks.items.length; i++){
                var artistName = "";

                for (let x = 0; x < data.tracks.items[i].album.artists.length; x++ ) {
                    artistName = artistName + data.tracks.items[i].album.artists[x].name;
                  }

                console.log("Artist:", artistName);
                console.log("Song Name:", data.tracks.items[i].name);
                console.log("Album:", data.tracks.items[i].album.name);

                if(data.tracks.items[i].preview_url === null){
                    console.log('Preview Link Unavailable for this track');
                } else(
                    console.log("Preview Link:", data.tracks.items[i].preview_url)
                )
                console.log("---------");

            }

          });

    }

    if(verb === "concert-this"){
        var concertArtistNoun = noun;
        axios.get("https://rest.bandsintown.com/artists/" + concertArtistNoun + "/events?app_id=codingbootcamp").then(
            function(response) {
                console.log(response.data);
     
                    for(i=0; i < response.data.length; i++){
                        console.log("Venue: ", response.data[i].venue.name);
                        console.log("Location: ", response.data[i].venue.city + ", "+ response.data[i].venue.region);
                        console.log("Date: ", moment(response.data[i].datetime).format('MM/DD/YYYY'));
                        console.log("-----------");
                    }

                //console.log(response, "*");
            }
          
        )}
};