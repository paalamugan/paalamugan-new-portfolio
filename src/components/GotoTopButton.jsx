import React, { useRef, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';

const GotoTopButton = () => {
  const ref = useRef(null);
  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      ref.current.style.display = 'flex';
    } else {
      ref.current.style.display = 'none';
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={ref} className="app__goto-top items-center justify-center flex text-white">
      <a href="#home">
        <FaAngleUp className="h-8" />
      </a>
    </div>
  );
};

export default GotoTopButton;
