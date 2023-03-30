import React from 'react';
// styles
import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const STContainer = styled.p`
  width: 100%;
  margin: 0 auto;
  color: ${variables.colors.red};
  text-align: center;
  padding: 2rem 0;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 4rem;
  @media ${variables.query.md} {
    margin-top: 1rem;
  }
`;

const SectionTitle = ({ title }) => {
  return <STContainer data-aos='fade-up'>{title}</STContainer>;
};

export default SectionTitle;
