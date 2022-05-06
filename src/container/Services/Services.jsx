import React from 'react';
import { BsSpeedometer2 } from 'react-icons/bs';
import { MdOutlineAnalytics } from 'react-icons/md';
import { BiCodeCurly } from 'react-icons/bi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Services.scss';

const serviceLists = [
  {
    icon: <BsSpeedometer2 />,
    title: 'Speed Optimization',
    description: 'We offer speed optimization service plans that can help your website load at top speeds.',
  },
  {
    icon: <MdOutlineAnalytics />,
    title: 'SEO',
    description: 'SEO is one of the best online marketing strategies to help your business improve its online presence.',
  },
  {
    icon: <BiCodeCurly />,
    title: 'Web Development',
    description: 'From simple to complex, our website design team will create, host, and update the site for you.',
  },
];

const Services = () => (
  <>
    <h2 className="mb-10 head-text">What I <span>DO</span></h2>

    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {serviceLists.map(({ icon, title, description }) => (
        <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.4 }} key={title} className="max-w-sm px-5 py-8 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col items-center text-center">
            <div className="text-6xl text-center text-secondary">
              {icon}
            </div>
            <h2 className="mt-4 mb-3 text-3xl font-semibold text-gray-800 ">{title}</h2>
            <p className="mb-4 text-base text-gray-600">{description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </>
);

export default AppWrap(
  MotionWrap(Services, 'app__services'),
  'services',
  'app__whitebg',
);
