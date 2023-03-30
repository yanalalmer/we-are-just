import React from 'react';
// STYLES
import { GlobalStyles } from './styles/globalStyles';
// COMPONENTS
import { Calendar, Header, Hero, Quotes } from './components';

function App() {
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
