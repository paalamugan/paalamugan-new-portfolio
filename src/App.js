import React from 'react';
import { ToastContainer } from 'react-toastify';

import { About, Contact, Header, Knowledge, Skills, Testimonial, Work, Services, Footer } from './container';
import { Navbar } from './components';

import 'react-toastify/dist/ReactToastify.css';
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
    <ToastContainer />
  </div>
);

export default App;
