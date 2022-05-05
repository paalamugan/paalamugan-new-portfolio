import React from 'react';

import { About, Contact, Header, Knowledge, Skills, Testimonial, Work, Services } from './container';
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
  </div>
);

export default App;
