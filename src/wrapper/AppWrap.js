import React from 'react';
import { GotoTopButton, NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <section id={idName} className={`app__container ${classNames || ''}`}>
      {idName === 'home' && <SocialMedia /> }
      <div className="app__wrapper app__flex">
        <Component />
      </div>
      <NavigationDots active={idName} />
      <GotoTopButton />
    </section>
  );
};

export default AppWrap;
