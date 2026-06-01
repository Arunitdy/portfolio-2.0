import React, { useState } from "react";
import "./Projects.css";
import { projectsData } from "../../data";

const projects = projectsData;

export const Projects = () => {
  const [expanded, setExpanded] = useState({});
  const toggleReadMore = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const truncate = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };


  return (
    <section id="projects" className="projects-container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-wrapper">
        <div className="projects-scroll">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.gui} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>
                {expanded[index] ? project.description : truncate(project.description, 100)}
                {project.description.length > 100 && (
                  <span 
                    className="read-more-toggle"
                    onClick={() => toggleReadMore(index)}
                  >
                    {expanded[index] ? " Read Less" : " Read More"}
                  </span>
                )}
              </p>
              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
