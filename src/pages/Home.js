import React, { useState } from 'react';
import './Home.css';
import profileImg from './ProfileHomeImage.jpg';
import certificate1 from './JavaBasic.jpg';
import certificate2 from './SoftwareEngineerCertificate.jpg';
import certificate3 from './SoftwareEngInternCertificate.jpg';

import certificate4 from './NITCoreJavaCertificate.jpg';

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="home-container">
      <div className="home-left">
        

<h1 className="merienda-heading light-text">Hi, I’m Hanuman Chavan</h1>

<p className="poppins-para medium-text">
  I’m a passionate Full Stack Developer specialized in building responsive and efficient web applications using <strong>React</strong>, <strong>Spring Boot</strong>, and <strong>MySQL</strong>.
</p>

<p className="courier-text dark-text">
  Welcome to my portfolio where I showcase my work, skills, and journey in web development.
</p>

        <a
          href="https://drive.google.com/file/d/1EGXqinkDJAWATOpOqY7YEKRx2InYB9w_/view?usp=drivesdk"
          download
          className="download-btn poppins-para"
          
        >
          Download CV
        </a>

        <div className="social-links" style={{ marginTop: '20px', display: 'flex', gap: '18px' }}>
          <a href="https://www.linkedin.com/in/hanuman-chavan-1853761b5" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <i className="fab fa-linkedin-in social-icon" style={{ fontSize: '1.8rem' }}></i>
          </a>
          <a href="https://github.com/chavanhanuman" target="_blank" rel="noopener noreferrer" title="GitHub">
            <i className="fab fa-github social-icon" style={{ fontSize: '1.8rem' }}></i>
          </a>
        </div>
      </div>

      <div className="home-right">
        <img
          src={profileImg}
          alt="Hanuman Chavan"
          className="hero-img glow-img"
          loading="lazy"
        />
      </div>

      {/* Certificates Section */}
      <div className="certificates-section">
        <h2>My Certifications</h2>
        <div className="certificates-gallery">
          {[certificate1, certificate2, certificate3,certificate4].map((cert, index) => (
            <img
              key={index}
              src={cert}
              alt={`Certificate ${index + 1}`}
              className="certificate-img"
              onClick={() => setSelectedImage(cert)}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div className="fullscreen-overlay" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full Certificate" className="fullscreen-img" />
        </div>
      )}
    </section>
  );
}

export default Home;
