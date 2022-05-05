import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';
import './Work.scss';
import { images, programmingLanguages, workTags } from '../../constants';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    // const query = '*[_type == "works"]';

    // client.fetch(query).then((data) => {
    //   setWorks(data);
    //   setFilterWork(data);
    // });
    const data = [
      {
        name: 'Translator Application',
        imgUrl: images.work.translatorApplication,
        projectLink: 'https://translator-application.vercel.app',
        codeLink: 'https://github.com/paalamugan/translator-mono-repo',
        title: 'Translator Application',
        description: 'It helps to translate from one language to multiple languages using svelte.',
        tags: ['nodejs', 'svelte'],
      },
      {
        name: 'Angular12 Boilerplate Template',
        imgUrl: images.work.angular12Boilerplate,
        projectLink: 'https://angular12-boilerplate-template.netlify.app',
        codeLink: 'https://github.com/paalamugan/oauth-angular-12-boilerplate-template',
        title: 'Angular12 Boilerplate Template',
        description: 'Angular12 Boilerplate Template using with angular material, flexlayout, tailwindcss.',
        tags: ['angular', 'tailwindcss'],
      },
      {
        name: 'CMS Blog',
        imgUrl: images.work.cmsBlog,
        projectLink: 'https://cms-blog-post.herokuapp.com',
        codeLink: 'https://github.com/paalamugan/cms-blog',
        title: 'CMS Blog',
        description: 'It helps to create authenticate blog posts, and users can also comments the specific posts.',
        tags: ['nodejs', 'react', 'mongodb'],
      },
      {
        name: 'Optic Visions',
        imgUrl: images.work.opticVisions,
        projectLink: 'https://optic-visions.herokuapp.com',
        codeLink: 'https://github.com/paalamugan/optic-visions',
        title: 'Optic Visions',
        description: 'This application useful for customer who wishes to have all the details for the optical related business.',
        tags: ['nodejs', 'angular', 'mysql'],
      },
      {
        name: 'Employee Payslip Generator',
        imgUrl: images.work.employeePayslipGenerator,
        projectLink: 'https://employee-payslip-generator.herokuapp.com',
        codeLink: 'https://github.com/paalamugan/employee-payslip-generator',
        title: 'Employee Payslip Generator',
        description: 'Generate a Employee monthly payslip download as pdf and send to their mail.',
        tags: ['nodejs', 'react'],
      },
      {
        name: 'Simple Jewellery App',
        imgUrl: images.work.jewelleryApp,
        projectLink: 'https://jewellery-app.netlify.app', // https://via.placeholder.com/200
        codeLink: 'https://github.com/paalamugan/JewelleryMiniApp-Angular',
        title: 'Simple Jewellery App',
        description: 'Angular Simple Jewellery Application made with angular6 framework.',
        tags: ['angular'],
      },
    ];
    setWorks(data);
    setFilterWork(data);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item.toLowerCase())));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">Checkout <span>Some of</span> my work</h2>

      <div className="app__work-filter">
        {workTags.map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter.includes(item) ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={work.imgUrl} alt={work.name} className="bg-gray-400" />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noopener noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="flex app__work-content">
              <h4 className="flex items-center text-lg bold-text">
                <div className="flex-1 mr-1 overflow-hidden text-ellipsis whitespace-nowrap" title={work.title}>{work.title}</div>
                <div className="flex gap-2">
                  {work.tags.map((tag) => (
                    <a
                      href={programmingLanguages[tag]?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img key={tag} src={programmingLanguages[tag]?.icon} alt={programmingLanguages[tag]?.name} title={programmingLanguages[tag]?.name} className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </h4>
              <p className="mt-2 text-base text-center p-text">{work.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);
