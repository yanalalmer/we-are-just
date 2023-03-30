import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
// images
import hero from '../../assets/imgs/hero.jpg';
// components
import ScrollDown from './ScrollDown';
// styles
import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const CContaier = styled.div`
  position: relative;
  .carousel .control-dots {
    width: fit-content;
    right: 10%;
    bottom: 10%;
  }
  .carousel .control-dots .dot {
    background-color: ${variables.colors.white};
    width: 15px;
    height: 15px;
    opacity: 1;
    @media ${variables.query.md} {
      width: 10px;
      height: 10px;
    }
    &.selected {
      background-color: ${variables.colors.red};
    }
  }
  .carousel-status {
    display: none;
  }
`;
export const CItem = styled.div``;
export const CImage = styled.img`
  position: relative;
`;
export const CContent = styled.div`
  position: absolute;
  top: 40%;
  left: 20%;
  text-align: left;
  @media ${variables.query.lg} {
    top: 20%;
    left: 10%;
  }
  @media ${variables.query.sm} {
    left: 0;
  }
`;
export const CSubtitle = styled.h3`
  background-color: ${variables.colors.red};
  color: ${variables.colors.white};
  font-weight: 700;
  text-transform: capitalize;
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
`;
export const CTitle = styled.h1`
  background-color: ${variables.colors.black};
  color: ${variables.colors.white};
  font-weight: 700;
  text-transform: capitalize;
  padding: 0.5rem 2rem 0.5rem 0.5rem;
`;
// animation

const Hero = () => {
  return (
    <CContaier>
      <Carousel showThumbs={false} showArrows={false} infiniteLoop autoPlay>
        {data.map((item) => (
          <CItem key={item.index}>
            <CImage src={item.img} />
            <CContent>
              <CSubtitle>risus fringilla ligula</CSubtitle>
              <CTitle>Donec sed odio dui.</CTitle>
              <CTitle>Integer posuere erat.</CTitle>
            </CContent>
          </CItem>
        ))}
      </Carousel>
      <ScrollDown />
    </CContaier>
  );
};

export default Hero;

const data = [
  {
    index: 1,
    img: hero,
    subTitle: 'risus fringilla ligula',
    title: 'Donec sed odio dui.',
    title2: 'Integer posuere erat.',
  },
  {
    index: 2,
    img: hero,
    subTitle: 'risus fringilla ligula',
    title: 'Donec sed odio dui.',
  },
  {
    index: 3,
    img: hero,
    subTitle: 'risus fringilla ligula',
    title2: 'Integer posuere erat.',
  },
];
