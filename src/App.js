import React from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import ProjectsHolder from './components/ProjectsHolder';

function App() {
  return (
    <>
      <Header />
      <About />
      <ProjectsHolder />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
