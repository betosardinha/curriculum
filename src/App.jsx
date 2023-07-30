import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import About from 'pages/About';
import NotFound from 'pages/NotFound';
import Menu from 'components/Menu';
import Footer from 'components/Footer';
import DefaultPage from 'components/DefaultPage';
import Post from 'components/Post';

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
