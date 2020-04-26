import React from 'react';

import GlobalStyle from './styles/global';

import Footer from './components/Footer';
import About from './components/About';
import ProjectsHolder from './components/ProjectsHolder';

function App() {
  return (
    <>
      <About />
      <ProjectsHolder />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
