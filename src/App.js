import React from 'react';

import { About, Contact, Header, Knowledge, Skills, Testimonial, Work, Services, Footer } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Knowledge />
    <Services />
    <Work />
    <Skills />
    <Testimonial />
    <Contact />
    <Footer />
  </div>
);

export default App;
