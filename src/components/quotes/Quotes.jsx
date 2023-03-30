import React from 'react';
// images
import profile1 from '../../assets/imgs/profile1.jpg';
import profile2 from '../../assets/imgs/profile2.jpg';
import profile3 from '../../assets/imgs/profile3.jpg';
// components
import { SectionTitle } from '../../components';
// styles
import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const QContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  @media ${variables.query.lg} {
    flex-direction: column;
  }
`;
export const QCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media ${variables.query.xl} {
    padding: 2rem 0;
  }
`;
export const QImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;
export const QName = styled.div`
  font-size: 2rem;
  width: 350px;
  text-align: center;
  margin: 2rem 0 1rem 0;
  font-weight: 800;
  text-transform: capitalize;
  position: relative;
  @media ${variables.query.lg} {
    font-size: 1.5rem;
  }
  ::before {
    content: open-quote;
    color: grey;
    opacity: 0.1;
    font-size: 8rem;
    position: absolute;
    left: 0;
    top: -55px;
  }
  ::after {
    content: close-quote;
    color: grey;
    opacity: 0.1;
    font-size: 8rem;
    position: absolute;
    right: 0;
  }
`;
export const QTitle = styled.p`
  color: ${variables.colors.red};
  font-weight: 700;
  padding-bottom: 0.5rem;
`;
export const QCompany = styled.p`
  color: ${variables.colors.red};
  text-transform: capitalize;
`;

const Quotes = () => {
  return (
    <>
      <SectionTitle title='what ohters say' />
      <QContainer>
        {data.map((item, index) => (
          <QCard
            key={index}
            data-aos='fade-in'
            data-aos-duration='1000'
            data-aos-delay='500'
          >
            <QImage src={item.image} />
            <QName>{item.name}</QName>
            <QTitle>{item.title}</QTitle>
            <QCompany>{item.company}</QCompany>
          </QCard>
        ))}
      </QContainer>
    </>
  );
};

export default Quotes;

const data = [
  {
    image: profile1,
    name: 'amet sollicitudin dolor aenean',
    title: 'Joeri van den Steenhoven',
    company: 'venenatis pellentesque tellus quam',
  },
  {
    image: profile2,
    name: 'amet sollicitudin dolor aenean',
    title: 'Roeland Hanemaaijer',
    company: 'venenatis pellentesque tellus quam',
  },
  {
    image: profile3,
    name: 'amet sollicitudin dolor aenean',
    title: 'Prof.dr. Pancras C.W. Hogendoorn',
    company: 'venenatis pellentesque tellus quam',
  },
];
