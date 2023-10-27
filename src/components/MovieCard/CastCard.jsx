import { Title } from 'components/GeneralStyled/General.styled';
import { ListItem } from './CastCard.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_IMG =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const CastCard = ({ photo, name, character }) => {
  return (
    <ListItem>
      {<img src={photo ? `${BASE_URL}${photo}` : DEFAULT_IMG} alt={name} />}
      <Title>{name}</Title>
      <p>{character}</p>
    </ListItem>
  );
};
