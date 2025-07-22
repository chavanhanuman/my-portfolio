import React from 'react';
import './Projects.css';
import portfolioScreenshot from '../pages/PortfolioScreenshot.png'; // adjust path if needed

function Projects() {
  return (
    <div className="projects-page">
      <h2>My Projects</h2>
      <ul>
        <li>
          <div className="project-card">
            <img
              src={portfolioScreenshot}
              alt="Portfolio Screenshot"
              className="project-image"
            />
            <p className="image-caption">
              Homepage of my portfolio website showcasing profile and skills.
            </p>
            <strong>My Portfolio Website</strong><br />
            A personal portfolio website made using React and hosted on Netlify.<br />
            <a href="https://hanumanchavan.netlify.app" target="_blank" rel="noreferrer">Live Demo</a> |{" "}
            <a href="https://github.com/chavanhanuman/my-portfolio" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </li>

        <li>
          <strong>Society Management System</strong><br />
          A full-stack web app using Spring Boot and React.<br />
          <a href="https://github.com/yourgithub/society-management">GitHub</a>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
