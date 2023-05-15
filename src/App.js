import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Interior from './pages/Interior';
import Construction from './pages/Construction';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/about' element={<About />}/>
        <Route  path='/services' element={<Services />}/>
        <Route  path='/contact' element={<Contact />}/>
        <Route  path='*' element={<PageNotFound />}/>
        <Route  path='/construction' element={<Construction />}/>
        <Route  path='/interior' element={<Interior />}/>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
