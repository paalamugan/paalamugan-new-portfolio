/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';
import './Testimonial.scss';
import { icons } from '../../constants';
import TestimonialItem from './TestimonialItem';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  // const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const testimonialsData = [
      {
        name: 'Parth P',
        iconUrl: icons.country.us,
        iconName: 'USA',
        feedback: 'On point work, tried to understand the requirements really well and delivered it brilliantly. Would love to work with him again.',
        company: 'Freelance',
      },
      {
        name: 'Chandrakandh M',
        iconUrl: icons.country.in,
        iconName: 'India',
        feedback: 'He understood the requirement very well and finished our React+Node work on time. He followed coding standards and did like a professional company. Definitely we will rehire him.',
        company: 'Freelance',
      },
      {
        name: 'Bishop M',
        iconUrl: icons.country.us,
        iconName: 'USA',
        feedback: 'Did a FANTASTIC job. Typically I dread hiring freelancers for small odds and ends on larger scale projects because they typically end up costing me more time than they save me but not only did he get an understanding of what I was needing done in a quick fashion he also didn\'t push back when I informed him that it would have be developed a certain way. Its nice to work with a professional that can build our project to the spec required. 5 STARS!',
        company: 'Freelance',
      },

      {
        name: 'Renan Georgio C',
        iconUrl: icons.country.br,
        iconName: 'Brazil',
        feedback: 'Paalamugan is a great worker, attentive and i definitely hired again',
        company: 'Freelance',
      },
    ];
    // const brandsData = [
    //   {
    //     _id: '12',
    //     name: 'Barnf 1',
    //     imgUrl: 'https://via.placeholder.com/150',
    //   },
    //   {
    //     _id: '122',
    //     name: 'Barnf 1',
    //     imgUrl: 'https://via.placeholder.com/150',
    //   },
    //   {
    //     _id: '112',
    //     name: 'Barnf 1',
    //     imgUrl: 'https://via.placeholder.com/150',
    //   },
    // ];
    setTestimonials(testimonialsData);
    // setBrands(brandsData);
    // const query = '*[_type == "testimonials"]';
    // const brandsQuery = '*[_type == "brands"]';

    // client.fetch(query).then((data) => {
    //   setTestimonials(data);
    // });

    // client.fetch(brandsQuery).then((data) => {
    //   setBrands(data);
    // });
  }, []);

  return (
    <>
      {testimonials.length && (
        <>
          <h2 className="mb-12 head-text">Testimonial</h2>
            {/* <img src={urlFor(testimonials[currentIndex].imgurl)} alt={testimonials[currentIndex].name} /> */}
            {/* <img src={testimonials[currentIndex].imgurl} alt={testimonials[currentIndex].name} /> */}
            {testimonials.map((testimonial, index) => (
              index === currentIndex && <TestimonialItem key={testimonial.name} {...testimonial} />
            ))}

          <div className="app__testimonial-btns app__flex">
            <div
              className="cursor-pointer app__flex"
              onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}
            >
              <HiChevronLeft />
            </div>

            <div className="cursor-pointer app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      {/* <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
