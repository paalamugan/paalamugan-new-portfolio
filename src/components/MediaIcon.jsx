/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedin, FaGithub } from 'react-icons/fa';

const MediaIcon = ({ icon, children, ...rest }) => {
  switch (icon) {
    case 'github':
      return children || <FaGithub {...rest} />;
    case 'linkedin':
      return children || <FaLinkedin {...rest} />;
    case 'facebook':
      return children || <FaFacebookF {...rest} />;
    case 'twitter':
      return children || <BsTwitter {...rest} />;
    case 'instagram':
      return children || <BsInstagram {...rest} />;
    default:
      return null;
  }
};

export default MediaIcon;
