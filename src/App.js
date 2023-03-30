import React from 'react';
// STYLES
import { GlobalStyles } from './styles/globalStyles';
// COMPONENTS
import { Header, Hero } from './components';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
    </>
  );
}

export default App;
