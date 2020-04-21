import React from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import ProjectsHolder from './components/ProjectsHolder';

function App() {
  return (
    <>
      <Header />
      <ProjectsHolder />
      <GlobalStyle />
    </>
  );
}

export default App;
