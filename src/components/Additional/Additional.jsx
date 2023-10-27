import {
  Container,
  List,
  ListItem,
  StyledLink,
  Title,
} from './Additional.styled';
import { Wrapper } from 'components/GeneralStyled/General.styled';

export const Additional = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Additional information</Title>
        <List>
          <ListItem>
            <StyledLink to="cast">Cast</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="reviews">Reviews</StyledLink>
          </ListItem>
        </List>
      </Wrapper>
    </Container>
  );
};
