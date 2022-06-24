import { useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Foot from './components/Foot';
import Nav from './components/Nav';
import About from './pages/About';
import Docs from './pages/Docs';
import Home from './pages/Home';

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </main>
      <Foot />
    </>
  );
}

export default App;
