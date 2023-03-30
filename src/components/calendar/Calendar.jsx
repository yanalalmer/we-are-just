import React from 'react';
import { BsCalendarDate } from 'react-icons/bs';
// components
import { SectionTitle, StyledButton } from '../../components';
// styles
import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const CContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding-bottom: 6rem;
  @media ${variables.query.md} {
    flex-direction: column;
    align-items: center;
  }
`;
export const CNewsSection = styled.div`
  position: relative;
  padding-right: 6rem;
  @media ${variables.query.md} {
    padding-right: 0;
  }
  ::after {
    content: '';
    background-color: ${variables.colors.red};
    position: absolute;
    width: 1px;
    height: 100%;
    top: 0;
    left: 100%;
    display: block;
    @media ${variables.query.md} {
      position: initial;
      width: 100%;
      height: 1px;
    }
  }
`;
export const CNewsItem = styled.div`
  padding: 1rem 0;
  @media ${variables.query.md} {
    text-align: center;
  }
`;
export const CNewsTitle = styled.p`
  font-weight: 800;
  text-transform: capitalize;
`;
export const CNewsDate = styled.p`
  margin-top: 10px;
`;
export const CCalendarSection = styled.div`
  margin-left: 6rem;
  @media ${variables.query.md} {
    margin-left: 0;
  }
`;
export const CCalendarItem = styled.div`
  padding: 1rem 0;
  svg {
    font-size: 3rem;
    float: left;
    margin-right: 1rem;
  }
  @media ${variables.query.md} {
    text-align: center;
  }
`;
export const CCalendarIcon = styled.img``;
export const CCalendarTitle = styled.p`
  font-weight: 800;
  text-transform: capitalize;
`;
export const CCalendarDate = styled.p`
  margin-top: 10px;
`;

const Calendar = () => {
  return (
    <>
      <SectionTitle title='news and events' />
      <CContainer>
        <CNewsSection data-aos='fade-right'>
          {news.map((item, index) => (
            <CNewsItem key={index}>
              <CNewsTitle>{item.title}</CNewsTitle>
              <CNewsDate>{item.date}</CNewsDate>
            </CNewsItem>
          ))}
          <StyledButton title='more news' />
        </CNewsSection>
        <CCalendarSection data-aos='fade-left'>
          {calendar.map((item, index) => (
            <CCalendarItem key={index}>
              <BsCalendarDate />
              <CCalendarTitle>{item.title}</CCalendarTitle>
              <CCalendarDate>{item.date}</CCalendarDate>
            </CCalendarItem>
          ))}
          <StyledButton title='more events' />
        </CCalendarSection>
      </CContainer>
    </>
  );
};

export default Calendar;

const news = [
  {
    title: 'tristique adipiscing consectetur',
    date: 'Feb 15, 2022',
  },
  {
    title: 'tristique adipiscing consectetur',
    date: 'Feb 9, 2022',
  },
  {
    title: 'tristique adipiscing consectetur',
    date: 'Feb 8, 2022',
  },
];
const calendar = [
  {
    title: 'european city of science',
    date: 'saturday, january 01',
  },
  {
    title: 'human capital intervisie',
    date: 'thursday, february 17',
  },
  {
    title: 'tech talk: 3d-laboratory in medicine',
    date: 'tuesday, february 22',
  },
];
