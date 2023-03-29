import React from 'react';
// icons
import { FaFacebook, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
// components
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';
import HamburgerMenu from './HamburgerMenu';
// styles
import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const HContainer = styled.header`
  height: ${variables.spacing.headerHeight};
  width: 100%;
  position: sticky;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
  background-color: ${variables.colors.white};
`;
export const HSocialMedia = styled.div`
  font-size: 1.2rem;
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin-right: 1rem;
    cursor: pointer;
    @media ${variables.query.md} {
      margin-right: 0;
    }
  }
  @media ${variables.query.md} {
    flex: 1;
    justify-content: space-evenly;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <HContainer>
      <HeaderLogo />
      <HeaderMenu isOpen={isOpen} />
      <HSocialMedia>
        <FaFacebook />
        <FaTwitter />
        <FaLinkedinIn />
        <FaYoutube />
      </HSocialMedia>
      <HamburgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />
    </HContainer>
  );
};

export default Header;
