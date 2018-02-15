

var dotenv = require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var twitter = require("twitter");
var spotify = require("node-spotify-api");

var client = new Twitter({
  consumer_key: process.env.keys.consumer_key,
  consumer_secret: process.env.keys.consumer_secret,
  access_token_key: process.env.keys.access_token_key,
  access_token_secret: process.env.keys.access_token_secret
});

var action = process.argv[2];
var object = process.argv[3];

switch (action) {
  case "my-tweets":
    getTweets();
    break;

  case "spotify-this-song":
    getSong();
    break;

  case "movie-this":
    getMovie();
    break;

  case "do-what-it-says":
    getRequest();
    break;
}

var params = {screen_name: 'nodejs', count: 20};

function getTweets() {
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  		}
	}
});
  else {
var spotify = new Spotify({
  id: process.env.keys.id,
  secret: process.env.keys.secret
	}
});



function getSong() {
	spotify.search({ type: 'track', query: object }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 	else {
	console.log(data.artists);
	console.log(data.name);
	console.log(data.preview_url);
	console.log(data.album)
}
});

function getMovie() {
	request("http://www.omdbapi.com/?t=" + object + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    
    console.log("The movie's title is: " + JSON.parse(body).Title);
    console.log("The movie was released in: " + JSON.parse(body).Year);
    console.log("The movie's IMDB rating is: " + JSON.parse(body).imdbRating);
    console.log("Rotten Tomatoes rating: " + JSON.parse(body).Ratings[1].Value);
    console.log("This movie was produced in: " + JSON.parse(body).Country);
    console.log("The movie's language is: " + JSON.parse(body).Language);
    console.log("The plot is: " + JSON.parse(body).Plot);
    console.log("Here are the actors: " + JSON.parse(body).Title);
  }
  else if (object = "") {
  		//return OMDB results for 'Mr. Nobody'
  }

  });
}



function getRequest() {

  fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }  else {
    		//turn text from txt file into argv
    }

}