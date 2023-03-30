import React from 'react';
// styles
import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const SButton = styled.button`
  background-color: transparent;
  color: ${variables.colors.red};
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 700;
  padding: 1rem 0.5rem;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border: none;
  transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
  user-select: none;

  ::before,
  ::after {
    content: '';
    position: absolute;
    transition: inherit;
    z-index: -1;

    top: 0;
    height: 100%;
    width: 0;
  }
  ::before {
    right: 0;
    border: 1px solid ${variables.colors.red};
    border-left: 0;
    border-right: 0;
  }
  ::after {
    left: 0;
  }
  :hover {
    color: ${variables.colors.white};
    transition-delay: 0.5s;
    ::before,
    ::after {
      width: 100%;
    }
    ::before {
      transition-delay: 0s;
    }
    ::after {
      background-color: ${variables.colors.red};
      transition-delay: 0.35s;
    }
  }
`;

const StyledButton = ({ title }) => {
  return <SButton>{title}</SButton>;
};

export default StyledButton;
