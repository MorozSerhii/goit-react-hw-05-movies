import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getPopular = async () => {
  const response = await axios('trending/movie/day', {
    params: {
      api_key: 'abb72529df670ecb15c1bc6e9ed76f7b',
    },
  });
  return response.data.results;
};

export const getMovieById = async id => {
  const response = await axios(`movie/${id}&language=en-US`, {
    params: {
      api_key: 'abb72529df670ecb15c1bc6e9ed76f7b',
    },
  });
  return response.data;
};
export const getMovieCredits = async id => {
  const response = await axios(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=abb72529df670ecb15c1bc6e9ed76f7b&language=en-US`
  );

  return response.data.cast;
};

export const getMovieReviews = async id => {
  const response = await axios(
    `movie/${id}/reviews?api_key=abb72529df670ecb15c1bc6e9ed76f7b&language=en-US&page=1`
  );
  return response.data.results;
};

export const searchMovie = async query => {
  const response = await axios(
    `/search/movie?api_key=abb72529df670ecb15c1bc6e9ed76f7b&language=en-US&query=${query}`
  );
  return response.data.results;
};
