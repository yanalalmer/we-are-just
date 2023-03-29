import React from 'react';
// styles
import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const HMenuContainer = styled.div`
  height: 100%;
  flex: 60%;

  @media ${variables.query.md} {
    position: absolute;
    top: ${variables.spacing.headerHeight};
    left: 0;
    width: 100%;
    height: calc(100vh - ${variables.spacing.headerHeight});
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: all 1s ease-in-out;
    background-color: ${variables.colors.white};
  }
`;
export const HMenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  @media ${variables.query.md} {
    justify-content: space-evenly;
    flex-direction: column;
  }
`;
export const HMenuItemLink = styled.a`
  cursor: pointer;

  ::after {
    content: '';
    display: block;
    width: 0;
    height: 3px;
    background-color: ${variables.colors.red};
    transition: all 0.3s ease-in-out;
  }
  :hover::after {
    width: 100%;
  }
`;
export const HMenuItem = styled.li`
  font-weight: 500;
  text-transform: capitalize;
`;

const HeaderMenu = ({ isOpen }) => {
  return (
    <HMenuContainer isOpen={isOpen}>
      <HMenuList>
        {data.map((item) => (
          <HMenuItemLink to={item.link} key={item.index}>
            <HMenuItem>{item.name}</HMenuItem>
          </HMenuItemLink>
        ))}
      </HMenuList>
    </HMenuContainer>
  );
};

export default HeaderMenu;

const data = [
  {
    index: 1,
    name: 'general',
    link: '/',
  },
  {
    index: 2,
    name: 'communities',
    link: '/',
  },
  {
    index: 3,
    name: 'unlock_',
    link: '/',
  },
  {
    index: 4,
    name: 'news',
    link: '/',
  },
  {
    index: 5,
    name: 'events',
    link: '/',
  },
  {
    index: 6,
    name: 'contact',
    link: '/',
  },
];
