import React from "react";
import "./Projects.css"; 

const projects = [
  {
    title: "Food Care",
    gui: "./logos/projectGui/foodCare.jpg", 
    description: "A food donation and distribution management system.",
    techStack: ["React", "Spring Boot", "MySQL"],
    liveLink: "",
    githubLink: "https://github.com/Arunitdy/Food-Donation-and-Distribution-Management-System",
  },
  {
    title: "Portfolio 2.0",
    gui: "/logos/projectGui/portfolio.jpg",
    description: "A modern developer portfolio built with React and Vite.",
    techStack: ["React", "Vite"],
    liveLink: "https://portfolio-2-0-wyqk.vercel.app/",
    githubLink: "https://github.com/Arunitdy/portfolio-2.0",
  },
  {
    title: "Activity Points System",
    gui: "/logos/projectGui/activity.jpg",
    description: "A system to track student activity points with AWS S3 storage.",
    techStack: ["React", "Firebase"],
    liveLink: "https://activity-points.vercel.app/",
    githubLink: "https://github.com/1518manu/ActivityPoints.git",
  },
  {
    title: "Smart-Energy-Meter",
    gui: "/logos/projectGui/smart.png",
    description: "A smart energy meter using Blynk cloud.",
    techStack: ["React", "Blynk Cloud"],
    liveLink: "",
    githubLink: "https://github.com/Arunitdy/Smart-Energy-Meter",
  },
  {
    title: "Soul",
    gui: "./logos/projectGui/soul.jpg", 
    description: "A food donation and distribution management system.",
    techStack: ["html", "css", "js", "emailJs.Api"],
    liveLink: "",
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
