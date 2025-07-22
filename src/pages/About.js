import React from 'react';
import './About.css';

// Import icons
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaJs, FaGithub } from 'react-icons/fa';
import { SiSpringboot, SiPostman, SiMysql, SiSpringsecurity } from 'react-icons/si';

const About = () => {
  return (
    <div className="page-wrapper">

    <div className="about-page">
      {/* About Hero Section */}
      <section className="about-hero">
        <h1>Hey, I'm <span>Hanuman Chavan</span></h1>
        <p className="about-tagline">
          A passionate <strong>Java Full Stack Developer</strong> who crafts clean, scalable, and efficient web solutions using <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>React.js</strong>, and <strong>MySQL</strong>.
        </p>
        <p className="about-subtext">
          I love transforming real-world problems into user-friendly digital experiences and always strive to write code that's not just functional — but elegant.
        </p>
      </section>


   <div className="about-stats-section">
  <h2 className="section-title">Stats</h2>
  <div className="stats">
    <div>1+ Projects</div>
    <span className="stat-separator">|</span>
    <div>300+ Coding Hours</div>
    <span className="stat-separator">|</span>
    <div>5+ Months Experience</div>
  </div>
</div>

      {/* Skills Section */}
      <section>
        <h2>Skills I Work With</h2>
        <div className="skills-grid">
          <div className="skill-card"><FaReact size={24} color="#61DBFB" /> React.js</div>
          <div className="skill-card"><FaJs size={24} color="#f0db4f" /> JavaScript</div>
          <div className="skill-card"><FaHtml5 size={24} color="#e34c26" /> HTML</div>
          <div className="skill-card"><FaCss3Alt size={24} color="#264de4" /> CSS</div>
          <div className="skill-card"><FaJava size={24} color="#007396" /> Java</div>
          <div className="skill-card"><SiSpringboot size={24} color="#6DB33F" /> Spring Boot</div>
          <div className="skill-card"><SiSpringsecurity size={24} color="#339933" /> Spring Security</div>
          <div className="skill-card"><SiMysql size={24} color="#00758F" /> MySQL</div>
          <div className="skill-card"><FaGithub size={24} color="#000000" /> Git & GitHub</div>
          <div className="skill-card"><SiPostman size={24} color="#FF6C37" /> Postman</div>
        </div>
      </section>

      {/* Education Section */}
     
     {/* Education Section */}
<section className="education-section">
  <h2>Education</h2>
  <div className="education-card">
    <h3>BBA (Computer Application)</h3>
    <p><strong>Dr. D.Y. Patil Arts, Commerce & Science College, Pimpri</strong></p>
    <p><em>Graduated: 2023 | Percentage: 72.80%</em></p>
    <p>
      Developed a strong foundation in business processes and computer technologies.
      Gained practical skills in Java, Web Development, Database Management, and Software Engineering.
    </p>
  </div>
</section>


      {/* Career Goal Section */}
      <section>
        <h2>Career Focus</h2>
        <p>
          I'm focused on becoming a strong full-stack developer, working on meaningful projects like society & chatbot systems, and exploring DevOps tools and AI integration.
        </p>
      </section>

      {/* Project Link CTA */}
      <section>
        <p>
          👉 You can check out my latest work on the <strong><a href="/projects">Projects</a></strong> page.
        </p>
      </section>

      {/* Contact CTA */}
      <section>
        <p><strong>📬 Want to connect?</strong> <a href="/contact">Visit the Contact Page</a></p>
      </section>
    </div>
    </div>
  );
};

export default About;
