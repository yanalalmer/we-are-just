import React from 'react';
import { Link } from 'react-scroll';
// styles
import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const SLine = styled.div`
  font-size: 0.875em;
  font-weight: 500;
  text-transform: capitalize;
  padding-bottom: 5px;
  transform: translateX(-35px);
  color: ${variables.colors.white};
`;
export const SArrow = styled.span`
  transform: rotate(-90deg);
  top: 14px;
  width: 45px;
  position: relative;
  display: inline-block;
  background: ${variables.colors.white};
  opacity: 0.8;
  height: 1px;
  transition: all 0.3s;

  ::before,
  ::after {
    top: 0;
    transform: rotate(0);
    opacity: 1;
    content: '';
    position: absolute;
    background: ${variables.colors.white};
    height: 1px;
    width: 10px;
    left: -1px;
    margin-right: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transition: all 0.3s;
  }
`;
export const SLink = styled(Link)`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  transform-style: preserve-3d;
  padding: 20px;
  backface-visibility: hidden;
  transition: opacity 0.35s ease 0.7s;
  cursor: pointer;

  :hover {
    outline-width: 0;

    ${SArrow} {
      margin-left: 5px;
      height: 2px;
      top: 2px;
      opacity: 1;
      width: 36px;
    }

    ${SArrow}::before {
      height: 2px;
      top: -3px;
      transform: rotate(-40deg);
    }
    ${SArrow}::after {
      height: 2px;
      top: 3px;
      transform: rotate(40deg);
    }
  }
  @media ${variables.query.md} {
    display: none;
  }
`;

const ScrollDown = () => {
  return (
    <SLink to='about' smooth duration={1000}>
      <SLine>scroll to explore</SLine>
      <SArrow></SArrow>
    </SLink>
  );
};

export default ScrollDown;
