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

export const HContainer = styled.header``;
export const HSocialMedia = styled.div``;

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
