import React from 'react';
import { motion } from 'framer-motion';
import { ImQuotesRight, ImQuotesLeft } from 'react-icons/im';
import { FaStar } from 'react-icons/fa';

const TestimonialItem = ({ name, feedback, iconUrl, iconName, company }) => (
  <motion.div className="app__testimonial-item app__flex">
    <motion.div whileInView={{ x: [-50, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__testimonial-content">
      <div className="flex justify-between w-full text-2xl text-gray-600">
        <ImQuotesLeft />
        <ImQuotesRight />
      </div>
      <p className="mx-10 text-center p-text">{feedback}</p>
      <div className="flex flex-col items-center w-full mt-8">
        <div className="flex gap-2 mb-3 text-2xl text-yellow-400">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="flex items-center">
          <img src={iconUrl} alt={iconName} width="20" height="20" className="mr-2 bg-gray-500" />
          <a href="https://www.freelancer.in/u/paalan007" target="_blank" rel="noreferrer" className="bold-text text-secondary">{name}&nbsp;&nbsp;({company})</a>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default TestimonialItem;
