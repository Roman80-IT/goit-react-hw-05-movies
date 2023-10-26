import { Link } from 'react-router-dom';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_IMG =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieCard = ({ id, poster_path, title }) => {
  return (
    <div>
      <Link to={`/movies/${id}`}>
        {
          <img
            src={poster_path ? `${BASE_URL}${poster_path}` : DEFAULT_IMG}
            alt={title}
          />
        }
        <h2>{title}</h2>
      </Link>
    </div>
  );
};

export default MovieCard;
