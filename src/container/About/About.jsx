import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const About = () => (
  <>
    <h2 className="head-text">About <span>Me</span></h2>
    <div className="app__about-container w-full 2xl:w-4/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        <motion.div className="flex flex-col">
          <p className="p-text-lg" style={{ marginTop: 10 }}>
            Having 4+ year of experience in MEAN & MERN Stack development and more enthusiasm for my work. Able to work independently, as a part of team and able to vaporize and grasp the new things. Extensive experience in working with product development and startup Product Company.
          </p>
          <p className="p-text-lg" style={{ marginTop: 10 }}>
            I am a solutions-driven Full-Stack Web Developer with strong skill sets in both Front-End and Back-End.
            By utilizing these tools, I’ve built several features for local business applications.
            I’ve learned a lot from new ways to debug, problem solving from a high level, new frameworks and libraries, etc. I’ve reinforced and improved upon my problem solving skills in both Front-End and Back-End.
          </p>
          <p className="p-text-lg" style={{ marginTop: 10 }}>
            As a Software Developer and Programmer. I&apos;m very passionate and dedicated towards my work.
            I love to play with coding, building software, and focusing on learning new technologies.
            Also, I have been working as a Senior Software Engineer for the last 1 years at a leading IT enabled business company known as Quantiphi Analytics Private Ltd.
          </p>
        </motion.div>
        <motion.div className="flex">
          <lottie-player
            data-anim-type="fade-in-left"
            data-anim-delay="100"
            src="https://assets5.lottiefiles.com/packages/lf20_w51pcehl.json"
            background="transparent"
            speed="1"
            hover
            loop
          />
        </motion.div>
      </div>
    </div>
  </>
);

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
