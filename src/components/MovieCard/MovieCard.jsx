import { Link } from 'react-router-dom';
import { Title4 } from 'components/GeneralStyled/General.styled';
import styled from 'styled-components';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_IMG =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const NoUnderlineLink = styled(Link)`
  text-decoration: none;
`;

const MovieCard = ({ id, poster_path, title }) => {
  // const location = useLocation();

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
      <div className="card h-100">
        <Link to={`/movies/${id}`}>
          <img
            src={poster_path ? `${BASE_URL}${poster_path}` : DEFAULT_IMG}
            className="card-img-top"
            alt={title}
          />
        </Link>
        <div className="card-body">
          <NoUnderlineLink to={`/movies/${id}`}>
            {/* <h5 className="card-title">{title}</h5> */}
            <Title4 className="card-title">{title}</Title4>
          </NoUnderlineLink>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

// state={{ from: location }}
