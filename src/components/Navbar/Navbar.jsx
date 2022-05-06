import React, { useState, useEffect, useCallback } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, useCycle } from 'framer-motion';

import { navLinks } from '../../constants';
import './Navbar.scss';
import Menu from './Menu';

const navbarVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.4,
      delay: 0.7,
    },
  },
};

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [currentActiveLink, setCurrentActiveLink] = useState('');
  const [isNavbarOpen, toggleNavbarOpen] = useState(false);

  useEffect(() => {
    const { hash } = window.location;
    setCurrentActiveLink(hash.slice(1));
  }, []);

  const handleClickOutside = useCallback((e) => {
    if (!e.target.closest('.app__navbar-menu')) {
      toggleOpen();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      return toggleNavbarOpen(isOpen);
    }

    const timer = setTimeout(() => {
      document.removeEventListener('click', handleClickOutside);
      toggleNavbarOpen(isOpen);
    }, 1000);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      clearTimeout(timer);
    };
  }, [isOpen]);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={images.logo} alt="logo" /> */}
        <div className="text-4xl font-bold logo-font">
          <span>PAALA</span>
          <span className="pl-2 text-secondary">MUGAN</span>
        </div>
      </div>
      <ul className="app__navbar-links">
        {navLinks.map((item) => (
          <li className={`app__flex p-text ${currentActiveLink === item ? 'active' : ''}`} key={`link-${item}`}>
            <div />
            <a href={`#${item}`} onClick={() => setCurrentActiveLink(item)}>{item}</a>
          </li>
        ))}
      </ul>

      <motion.div className="app__navbar-menu" initial={false} animate={isOpen ? 'open' : 'closed'}>
        <HiMenu className={`${!isNavbarOpen ? 'z-10' : ''}`} onClick={() => toggleOpen()} />

        <motion.div
          className={`${!isNavbarOpen ? 'invisible' : ''}`}
          variants={navbarVariants}
        >
          <HiX onClick={() => toggleOpen()} />
          <Menu toggleOpen={toggleOpen} />
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
