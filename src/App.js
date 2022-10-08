import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './routes/Home';
import About from './routes/About';
import Portfolio from './routes/Portfolio';
import Contact from './routes/Contact';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='portfolio' element={<Portfolio />} />
      <Route path='contact' element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
