import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'e4343e9435d3c889d6a064dcae0361e0';

export const fetchTrending = async () => {
  try {
    return await axios
      .get(`${BASE_URL}/trending/all/day?api_key=${KEY}`)
      .then(response => response.data.results);
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    return await axios
      .get(`${BASE_URL}/movie/${movieId}?api_key=${KEY}`)
      .then(response => response.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearch = async query => {
  try {
    return await axios
      .get(
        `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`,
      )
      .then(response => response.data.results);
  } catch (error) {
    console.log(error);
  }
};

export const fetchCast = async moviesId => {
  try {
    return await axios
      .get(
        `${BASE_URL}/movie/${moviesId}/credits?api_key=${KEY}&language=en-US`,
      )
      .then(response => response.data.cast);
  } catch (error) {
    console.log(error);
  }
};

export const fetchReviews = async moviesId => {
  try {
    return await axios
      .get(`${BASE_URL}/movie/${moviesId}/reviews?api_key=${KEY}`)
      .then(response => response.data.results);
  } catch (error) {
    console.log(error);
  }
};
