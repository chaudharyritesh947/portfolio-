// Components/Projects.js
import React from "react";
import "./Projects.css"; // CSS for enhanced styling

const Projects = () => (
  <section id="projects" className="projects-section animate__animated animate__fadeInUp">
    <h2 className="projects-title">Projects</h2>
    <div className="project-grid">
      <div className="project-item">
        <h3>Portfolio</h3>
        <p>A personal portfolio showcasing skills, projects, and achievements.</p>
      </div>
      <div className="project-item">
        <h3>Scheduler</h3>
        <p>
          A tool where users can schedule their day and view analytics of previous records,
          helping in time management and productivity.
        </p>
      </div>
      <div className="project-item">
        <h3>Dashboard Generator</h3>
        <p>
          Generates dashboards from the given Excel data, simplifying data visualization
          for users with an intuitive interface.
        </p>
      </div>
      <div className="project-item">
        <h3>10+ Corporate Projects</h3>
        <p>
          A variety of projects developed during my corporate career, focusing on scalability
          and robust architectures.
        </p>
      </div>
    </div>
  </section>
);

export default Projects;