import React from 'react';
import './Footer.css';

const Footer = () => {
  const githubLogo = "https://cdn-icons-png.flaticon.com/512/25/25231.png";
  const linkedinLogo = "https://cdn-icons-png.flaticon.com/512/174/174857.png";

  return (
    <footer className="footer">
      <p>© 2025 Hanuman Chavan</p>
      <p className="contact-number">Contact: +91 9356317918</p>

      <div className="social-links">
        <a href="https://github.com/chavanhanuman" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src={githubLogo} alt="GitHub" className="icon" />
          GitHub
        </a>
        <span className="separator">|</span>
        <a href="https://www.linkedin.com/in/hanuman-chavan-1853761b5" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src={linkedinLogo} alt="LinkedIn" className="icon" />
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
