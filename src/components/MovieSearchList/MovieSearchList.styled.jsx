import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Input = styled.input`
  margin: 10px 5px;
  border-radius: 10px;
`;
export const Label = styled.label`
  margin: 0 15px;
  font-weight: bold;
`;
export const Btn = styled.button`
  display: inline-block;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: #090909;
  padding: 0.1em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  &:active {
    color: #666;
    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
  }
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }
  &:after {
    content: '';
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: #009087;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }
  &:hover {
    color: #ffffff;
    border: 1px solid #009087;
  }
  &:hover:before {
    top: -35%;
    background-color: #009087;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }
  &:hover:after {
    top: -45%;
    background-color: #009087;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }
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
