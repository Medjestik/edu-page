import React from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Introduction from '../Introduction/Introduction.js';
import Numbers from '../Numbers/Numbers.js';
import About from '../About/About.js';
import Features from '../Features/Features.js';
import Advantages from '../Advantages/Advantages.js';
import Programs from '../Programs/Programs.js';
import Map from '../Map/Map.js';
import Partner from '../Partner/Partner.js';
import Testimonials from '../Testimonials/Testimonials.js';
import Subscribe from '../Subscribe/Subscribe.js';
import Footer from '../Footer/Footer.js';

function App() {
  return (
    <div className="page">
      <Header />
      <Introduction />
      <Numbers />
      <About />
      <Features />
      <Advantages />
      <Programs />
      <Map />
      <Partner />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;

