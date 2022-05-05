/* eslint-disable max-len */
import React, { useState, useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';
import './Skills.scss';
import { programmingLanguages } from '../../constants';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const experienceData = [
      {
        year: '2021',
        works: [
          {
            name: 'Senior Software Engineer - Full Stack',
            company: 'Quantiphi Analytics Solution',
            desc: 'Having worked with client such as Arizona Health Care Cost Containment System (AHCCCS), General Motors-USA, and many more. Implemented dialogflow Messenger chatbot functionality from scratch.',
          },
        ],
      },
      {
        year: '2019',
        works: [
          {
            name: 'Software Engineer',
            company: 'NamLabs Technologies Private Ltd,',
            desc: 'Working as a Full stack web developer with our company own Product such Atatus, UI Inspector, ReplayBird, LeadMine. Worked on extensively on AngularJS, React and Vue as front end and NodeJS, Python as a backend.',
          },
          // {
          //   name: 'Atatus Product',
          //   company: 'NamLabs Technologies Private Ltd,',
          //   desc: 'Developed full Layout module for Atatus documentation page using Jekyll. Implemented availability synthetic monitor.it includes web monitors, DNS monitoring, SSL monitoring, TCP monitoring, UDP monitoring, CronJob monitor, scheduled task monitoring, heartbeat monitoring and API monitoring.',
          // },
          // {
          //   name: 'ReplayBird Product',
          //   company: 'NamLabs Technologies Private Ltd,',
          //   desc: 'Developed Full website(ReplayBird) for end to end individually using REACT Framework.',
          // },
          // {
          //   name: 'LeadMine Product',
          //   company: 'NamLabs Technologies Private Ltd,',
          //   desc: 'Implemented to store credit/debit card details information powered by stripe and also developed subscription page.',
          // },
          // {
          //   name: 'UI Inspector Product',
          //   company: 'NamLabs Technologies Private Ltd,',
          //   desc: 'Worked on most of the feature for this product development both frontend and backend. Developed Dashboard Page, Testcase Page, Plan Page and application page in both front end and back end.(Angular JS and Node JS)',
          // },
        ],
      },
      {
        year: '2018',
        works: [
          {
            name: 'Junior Software Engineer',
            company: 'Add-on Technology Private Ltd.',
            desc: 'Worked as MEAN stack developer where as i have implemented Bakery internal Product(Anumod Bakery) using MEAN stack technology.',
          },
        ],
      },
      {
        year: '2017',
        works: [
          {
            name: 'Web Developer',
            company: 'Muthu Soft Labs Private Ltd.',
            desc: 'Worked as web developer and learned HTML ,CSS, JS and Photoshop. Developed FinePaperSource UX Design using Photoshop.',
          },
        ],
      },
    ];
    const skillsData = [
      'html',
      'css',
      'javascript',
      'sass',
      'nodejs',
      'express',
      'mongodb',
      'mysql',
      'redis',
      'react',
      'angular',
      'vue',
      'nextjs',
      'svelte',
      'gatsby',
      'googlecloud',
      'heroku',
      'docker',
      'python',
    ];
    setExperiences(experienceData);
    setSkills(skillsData);
    // const query = '*[_type == "experiences"]';
    // const skillsQuery = '*[_type == "skills"]';

    // client.fetch(query).then((data) => {
    //   console.log({ data });
    //   setExperiences(data);
    // });

    // client.fetch(skillsQuery).then((data) => {
    //   setSkills(data);
    // });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.a
              href={programmingLanguages[skill]?.url}
              target="_blank"
              rel="noopener noreferrer"
              whileInView={{ opacity: [0, 1] }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="cursor-pointer app__skills-item app__flex"
              key={programmingLanguages[skill]?.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: programmingLanguages[skill]?.bgColor }}
              >
                {programmingLanguages[skill]?.icon && <img src={programmingLanguages[skill]?.icon} alt={programmingLanguages[skill]?.name} />}
              </div>
              <p className="p-text">{programmingLanguages[skill]?.name}</p>
            </motion.a>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, index) => (
                  <Fragment key={work.name + index}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
