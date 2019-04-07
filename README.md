# liri-node-app

A Language Interpretation and Recognition Interface (LIRI) using the Spotify, Band in Town, and OMDB.

The following node packages are used:
* [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
* [Axios](https://www.npmjs.com/package/axios)
* [Moment](https://www.npmjs.com/package/moment)
* [DotEnv](https://www.npmjs.com/package/dotenv)

## How to use the program:
**To search Spotify songs run the following:**

    node liri.js spotify-this-song <enter a song>

**To search movies from OMDB run the following:**

    node liri.js movie-this <enter a movie>

**To search concerts by band run the following:**

    node liri.js concert-this <enter a band>

**Run the below command to read from the random.text file:**

    node liri.js do-what-it-says

Screenshots:

Sample of the spotify-this function (Searching 'sublime'):
![Sublime Spotify](https://raw.githubusercontent.com/TyDSmith/liri-node-app/master/images/sublime-screenshot-spotify.png "Searching sublime with spotify-this")

Sample of the movie-this function (Searching 'yes'):
![yes Movie](https://raw.githubusercontent.com/TyDSmith/liri-node-app/master/images/yes-movie-this.png "Searching yes with movie-this")

Sample of the concert-this function (Searching 'dsb'):
![DSB Concert](https://raw.githubusercontent.com/TyDSmith/liri-node-app/master/images/dsb-concert-this.png "Searching dsb with concert-this")


