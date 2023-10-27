import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const BackBtn = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;

  width: fit-content;

  margin-bottom: 16px;
  padding: 4px 12px;

  text-decoration: none;
  color: #132b55;
  background-color: #ffd273;
  border: 1px solid #ffad00;
  border-radius: 8px;

  cursor: pointer;

  &:hover,
  &:focus {
    color: #ffad00;
    background-color: #132b55;
    border-color: #132b55;
  }
`;

export const Arrow = styled(BiArrowBack)`
  display: block;
`;
