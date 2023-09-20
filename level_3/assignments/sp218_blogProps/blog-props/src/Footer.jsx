import React from 'react';
import { FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa';

import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <p className="footer-content">
        Copyright &copy; 2023 yourWebsite
      </p>
    </footer>
  );
};

export default Footer;
