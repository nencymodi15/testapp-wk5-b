const trakt = "https://api.trakt.tv"; //base URL for any Trakt API requests

/*
 * Functions for Trakt API requests.
 */
async function getTrendingMovies() {
  let reqUrl = `${trakt}/movies/trending`;
  let response = await fetch(
    reqUrl,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": "2",
        "trakt-api-key": process.env.TRAKT_CLIENT_ID
      }
    }
  );
  return await response.json();
}
async function topMoviesData(){
  let reqUrl = `${trakt}/movies/${imdbId}/shows`;
  let response = await fetch(
    reqUrl,{
      method:"GET",
      headers:{
        "Content-type": "application/json",
        "tract-api-version" : "2",
        "trakt-api-key": process.env.TRAKT_CLIENT_ID
      }
    }
  );
  return await response.json();
}

async function getMovieRating(imdbId) {
  let reqUrl = `${trakt}/movies/${imdbId}/ratings`;
  //For POST requests, if you need to pass data, you need to pass
  //it using the following option:
  //* body: <data_to_pass>
  let response = await fetch(
    reqUrl,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": "2",
        "trakt-api-key": process.env.TRAKT_CLIENT_ID
      }
    }
  );
  return await response.json();
}

module.exports = {
  getTrendingMovies,
  getMovieRating,
  topMoviesData
};