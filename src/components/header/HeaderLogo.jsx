import React from 'react';
// image
import logo from '../../assets/svg/logo.svg';
// styles
import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const HLogoContainer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;

  @media ${variables.query.md} {
    flex: 1;
  }
`;
export const HLogoImg = styled.img`
  height: 50px;
`;

const HeaderLogo = () => {
  return (
    <HLogoContainer>
      <HLogoImg src={logo} />
    </HLogoContainer>
  );
};

export default HeaderLogo;
