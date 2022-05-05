import React from 'react';
import { GotoTopButton, NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <section id={idName} className={`app__container ${classNames || ''}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
          <p className="p-text">@2022 Paalamugan</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
      <GotoTopButton />
    </section>
  );
};

export default AppWrap;
