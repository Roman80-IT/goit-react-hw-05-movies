import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCast } from 'services/api';

import { CastCard } from 'components/MovieCard/CastCard';
import { List } from './Cast.styled';
import { Wrapper } from 'components/GeneralStyled/General.styled';
import { Loader } from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const scrollToAdditional = () => {
    window.scrollTo({ top: 500, behavior: 'smooth' });
  };

  useEffect(() => {
    async function getCastInfo() {
      try {
        setLoading(true);
        const response = await getCast(movieId);
        setCast(response.cast);

        scrollToAdditional();
      } catch (error) {
        // console.log(error.message);

        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getCastInfo();
  }, [movieId]);

  return (
    <Wrapper>
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {cast !== null && (
        <List>
          {cast.map(({ profile_path, name, character, id }) => (
            <CastCard
              key={id}
              photo={profile_path}
              name={name}
              character={character}
            ></CastCard>
          ))}
        </List>
      )}
    </Wrapper>
  );
};

export default Cast;
