import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Knowledge.scss';
import { images } from '../../constants';

const Knowledge = () => {
  const [abouts] = useState([
    {
      title: 'Frontend Developer',
      description: 'I am a Frontend developer with a passion for developing flexible web applications. I have a strong background in HTML, CSS, and JavaScript.',
      imgUrl: images.about01,
    },
    {
      title: 'Backend Developer',
      description: 'I am a Backend developer with a passion for developing flexible web applications. I have a strong background in Nodejs, Expressjs, and MongoDB.',
      imgUrl: images.about02,
    },
    {
      title: 'Mern Stack Developer',
      description: 'I am a Mern stack developer with a passion for developing flexible web applications. I have a strong background in MongoDB, Expressjs, React and Nodejs.',
      imgUrl: images.about03,
    },
    // {
    //   title: 'Mean Stack Developer',
    //   description: 'I am a Mean stack developer with a passion for developing flexible web applications. I have a strong background in MongoDB, Expressjs, Angular and Nodejs.',
    //   imgUrl: images.about04,
    // },
    {
      title: 'Full Stack Developer',
      description: 'I am a Full stack developer with a passion for developing flexible web applications with a robust frontend and backend services.',
      imgUrl: images.about04,
    },
  ]);

  // useEffect(() => {
  //   // const query = '*[_type == "abouts"]';

  //   // client.fetch(query).then((data) => {
  //   //   setAbouts(data);
  //   // });
  // }, []);

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, type: 'tween' }}
            className="app__profile-item cursor-pointer"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Knowledge, 'app__knowledge'),
  'knowledge',
  'app__primarybg',
);
