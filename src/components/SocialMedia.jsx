import React from 'react';
import { socialLinks } from '../constants';
import MediaIcon from './MediaIcon';

const SocialMedia = () => (
  <div className="app__social">
    {socialLinks.map((social) => (
      <div key={social.icon} className={social.icon}>
        <a href={social.url} target="_blank" rel="noreferrer" className="flex-grow flex items-center justify-center">
          <MediaIcon icon={social.icon} />
        </a>
      </div>
    ))}
  </div>
);

export default SocialMedia;
