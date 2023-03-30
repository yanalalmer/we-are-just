import React from 'react';
// STYLES
import { GlobalStyles } from './styles/globalStyles';
// COMPONENTS
import { Header, Hero, Quotes } from './components';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Quotes />
    </>
  );
}

export default App;
