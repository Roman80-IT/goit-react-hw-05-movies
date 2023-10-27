import MovieCard from 'components/MovieCard/MovieCard';

export const MovieList = ({ movies }) => {
  // console.log('movies in MovieList: ', movies);
  const showMovies = Array.isArray(movies) && movies.length;

  return (
    <div>
      {showMovies &&
        movies.map(movie => {
          return (
            <div>
              <MovieCard
                key={movie.id}
                id={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
              />
            </div>
          );
        })}
    </div>
  );
};

export default MovieList;
