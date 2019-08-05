import React from 'react';
import Navbar from "./components/Navbar";
import Name from './components/Name';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './styles/App.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Name />
      <div className='resizeable'>
      <About />
      <Projects />
      <Contact />
      </div>
    </div>
  );
}

export default App;
