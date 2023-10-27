import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesForQuery } from 'services/api';
import { Loader } from 'components/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { Wrapper } from 'components/GeneralStyled/General.styled';
import { Btn, Form, Input, Search } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const query = searchParams.get('query');

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    async function getMovies() {
      try {
        setLoading(true);
        const allMovies = await getMoviesForQuery(query);
        setMovies(allMovies);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.error('Something went wrong. Try again');
        }
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, [query, setSearchParams]);

  return (
    <Wrapper>
      <Form role="search" onSubmit={handleSubmit}>
        <Input
          type="search"
          placeholder="Search"
          aria-label="Search"
          name="query"
        />
        <Btn type="submit">
          <Search size="28"></Search>
        </Btn>
      </Form>

      {loading && <Loader />}
      {movies.results?.length === 0 && query && (
        <p>Sorry. We can't find movies matching your query "{query}".</p>
      )}

      {movies.results?.length !== 0 && <MovieList movies={movies.results} />}
    </Wrapper>
  );
};

export default Movies;
