import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  gap: 10px;
`;
export const ListLink = styled(Link)`
  liststyle: circle;
  font-size: 16px;
  text-decoration: none;
  color: black;
  width: 390px;
  display: inline-block;
  transition: all 0.2s ease-out;
  &:hover {
    color: white;
    background-color: black;
  }
`;
