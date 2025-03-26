import React from "react";
import "./Projects.css"; 

// Import images correctly
import FDMS from "../logos/projectGui/FDMS.jpg";
import Portfolio from "../logos/projectGui/portfolio.png";
import Activity from "../logos/projectGui/activity.png";
import Smart from "../logos/projectGui/smart.png";
import Soul from "../logos/projectGui/soul.png";

// Projects Data
const projects = [
  {
    title: "Food Care",
    gui: FDMS,
    description: "A food donation and distribution management system.",
    techStack: ["React", "Spring Boot", "MySQL"],
    liveLink: "",
    githubLink: "https://github.com/Arunitdy/Food-Donation-and-Distribution-Management-System",
  },
  {
    title: "Portfolio 2.0",
    gui: Portfolio,
    description: "A modern developer portfolio built with React and Vite.",
    techStack: ["React", "Vite"],
    liveLink: "https://portfolio-2-0-wyqk.vercel.app/",
    githubLink: "https://github.com/Arunitdy/portfolio-2.0",
  },
  {
    title: "Activity Points System",
    gui: Activity,
    description: "A system to track student activity points with AWS S3 storage.",
    techStack: ["React", "Firebase"],
    liveLink: "https://activity-points.vercel.app/",
    githubLink: "https://github.com/1518manu/ActivityPoints.git",
  },
  {
    title: "Smart-Energy-Meter",
    gui: Smart,
    description: "A smart energy meter using Blynk cloud.",
    techStack: ["React", "Blynk Cloud"],
    liveLink: "https://smart-energy-meter-three.vercel.app/",
    githubLink: "https://github.com/Arunitdy/Smart-Energy-Meter",
  },
  {
    title: "Soul",
    gui: Soul,
    description: "Soul is an interactive web experience that blends love, romance, and technology through stunning visuals, animations, and heartfelt interactions, making it perfect for digital love letters or creative proposals.",
    techStack: ["HTML", "CSS", "JavaScript", "emailJs.Api"],
    liveLink: "https://soul-xi.vercel.app/",
    githubLink: "https://github.com/Arunitdy/Soul-",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-wrapper">
        <div className="projects-scroll">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.gui} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
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
