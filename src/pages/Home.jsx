import React, { useEffect, useState } from 'react';
import { Loader } from 'components/Loader';

import MovieList from 'components/MovieList/MovieList';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import { Wrapper, Title } from 'components/GeneralStyled/General.styled';

import { getTrendingMovies } from 'services/api';

const Home = () => {
  const [movies, setTrendingList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendsMovies = async () => {
      try {
        setLoading(true);
        const moviesList = await getTrendingMovies();

        setTrendingList(moviesList);
      } catch (error) {
        // console.log(error.message);

        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getTrendsMovies();
  }, []);

  // console.log('Movies:', movies);

  return (
    <Wrapper>
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <Title>Trend of day</Title>
      <div>
        <MovieList movies={movies} />
      </div>
    </Wrapper>
  );
};

export default Home;
