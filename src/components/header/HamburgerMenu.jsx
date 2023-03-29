import React from 'react';
// styles
import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const HBtn = styled.div`
  display: none;
  @media ${variables.query.md} {
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  cursor: pointer;
  transition: all 0.5s ease-in-out;
  height: 100%;
`;
export const HbtnMenu = styled.div`
  width: 30px;
  height: 6px;
  background: ${({ isOpen }) => (isOpen ? 'transparent' : 'black')};
  border-radius: 5px;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(-50px)' : 'translateX(0)'};

  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 6px;
    background-color: ${variables.colors.black};
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
  }
  ::before {
    transform: ${({ isOpen }) =>
      isOpen ? 'rotate(45deg) translate(35px, -35px)' : 'translateY(-10px)'};
  }
  ::after {
    transform: ${({ isOpen }) =>
      isOpen ? 'rotate(-45deg) translate(35px, 35px)' : 'translateY(10px)'};
  }
`;

const HamburgerMenu = ({ setIsOpen, isOpen }) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HBtn isOpen={isOpen} onClick={handleClick}>
      <HbtnMenu isOpen={isOpen} />
    </HBtn>
  );
};

export default HamburgerMenu;
