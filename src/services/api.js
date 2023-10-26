import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '687e4525be1a45f56930e098a4988fd3';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
  console.log('data: ', data);
  return data.results;
};

//////////////////////////// Not
// `${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`;
// `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=687e4525be1a45f56930e098a4988fd3`;
//////////////////////////// Not

export const getMoviesForQuery = async query => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?query=${query}&api_key=687e4525be1a45f56930e098a4988fd3`
  );
  console.log('data: ', data);
  return data;
};

//////////////////////////// Not
// return data.results;
// `https://api.themoviedb.org/3/search/movie?query=Lviv&api_key=687e4525be1a45f56930e098a4988fd3`
// `${BASE_URL}/search/movie?query=${query}&include_adult=true&language=en-US&api_key=${API_KEY}`;
//////////////////////////// Not

// export async function getMoviesDetails(id) {
//   return axios.get(`${BASE_URL}/movie/${id}?language=en-US&api_key=${API_KEY}`);
// }

export const getMoviesDetails = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}?language=en-US&api_key=${API_KEY}`
  );
  console.log('search (movieId):', data);
  console.log('search (movieId):', data.belongs_to_collection);
  return data;
};
//  https://api.themoviedb.org/3/movie/575264?language=en-US&api_key=687e4525be1a45f56930e098a4988fd3
// `${BASE_URL}/movie/${movieId}?language=en-US&api_key=${API_KEY}`;
// `${BASE_URL}/search/${movieId}?language=en-US&api_key=${API_KEY}`;
///////////////////////////////////
// export const getMovieDetails = async id => {
//   const { data } = await axios.get(`/movie/${id}?${searchParams}`);
//   return data;
// };
