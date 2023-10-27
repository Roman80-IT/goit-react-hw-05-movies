import MovieCard from 'components/MovieCard/MovieCard';

export const MovieList = ({ movies }) => {
  // console.log('movies in MovieList: ', movies);
  const showMovies = Array.isArray(movies) && movies.length;

  return (
    <div className="row g-4">
      {showMovies &&
        movies.map(movie => {
          return (
            <MovieCard
              key={movie.id}
              id={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
            />
          );
        })}
    </div>
  );
};

export default MovieList;
