import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import About from 'pages/About';
import Menu from 'components/Menu';
import Footer from 'components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
