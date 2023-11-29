// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BasicNavbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './components/Contact';
import About from './pages/About';
import Gallery from './components/Gallery';
import PaintingDetail from './components/PaintingDetail';
import paintingsData from './data/paintingsData';

function App() {
  return (
    <div>
      <BasicNavbar />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery paintingsData={paintingsData} />} />
        <Route path="/gallery/:id" element={<PaintingDetail paintingsData={paintingsData} />} />
      </Routes>
    </div>
  );
}

export default App;
