import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// STYLES
import { GlobalStyles } from './styles/globalStyles';
// COMPONENTS
import { Calendar, Header, Hero, Quotes } from './components';

function App() {
  AOS.init();
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Quotes />
      <Calendar />
    </>
  );
}

export default App;
