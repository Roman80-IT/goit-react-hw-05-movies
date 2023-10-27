import { styled } from 'styled-components';

export const Details = styled.div`
  display: flex;
  gap: 24px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Poster = styled.img`
  max-width: 350px;
  height: 100%;
`;

export const SubTitle = styled.h3`
  margin-top: 24px;

  color: #132b55;
`;

export const List = styled.ul`
  padding-left: 24px;
  list-style-type: disc;
`;
