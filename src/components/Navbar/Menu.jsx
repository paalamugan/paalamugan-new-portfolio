import React from 'react';
import { motion } from 'framer-motion';

import { navLinks } from '../../constants';
import MenuItem from './MenuItem';

const navigationVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Menu = ({ toggleOpen }) => (
  <motion.ul variants={navigationVariants}>
    {navLinks.map((item) => (
      <MenuItem key={`menu-${item}`} item={item} toggleOpen={toggleOpen} />
    ))}
  </motion.ul>
);

export default Menu;
