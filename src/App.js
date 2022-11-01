import React from 'react';
import './App.css';
import RenderApi from './Components/Render/RenderApi';
import Footer from './Components/UI/Footer';
import Hero from './Components/UI/Hero';
import Navbar from './Components/UI/Navbar';

function App() {
  return (
  <>
  <Navbar/>
  <Hero/>
  <RenderApi/>
  <Footer/>
  </>
  );
}

export default App;
