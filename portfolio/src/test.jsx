import React, { useState } from "react";
import "./Projects.css"; 

import FDMS from "../logos/projectGui/FDMS.jpg";
import Portfolio from "../logos/projectGui/portfolio.png";
import Activity from "../logos/projectGui/activity.png";
import Smart from "../logos/projectGui/smart.png";
import Soul from "../logos/projectGui/soul.png";
import GDG from "../logos/projectGui/GDG.png";

// Projects Data
const projects = [
  {
    title: "Activity Points System",
    gui: Activity,
    description: "A system to track student activity points with fire store.",
    techStack: ["React", "Firebase"],
    liveLink: "https://activity-points.vercel.app/",
    githubLink: "https://github.com/1518manu/ActivityPoints.git",
  },
  {
    title: "Food Care",
    gui: FDMS,
    description: "A food donation and distribution management system.",
    techStack: ["React", "Spring Boot", "MySQL"],
    liveLink: "",
    githubLink: "https://github.com/Arunitdy/Food-Donation-and-Distribution-Management-System",
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
    title: "Devcation'25- GDG On Campus IGDTUW",
    gui: GDG,
    description: "Devcation'25 is the technical festival organized by Google Developer Groups OnCampus - Indira Gandhi Delhi Technical University for Women that celebrates diversity in the TechForGood Domain. During the week, we have the Devcation'25 hackathon: Hack 'N' Solve.",
    techStack: ["React", "Vite","CSS"],
    liveLink: "https://gemini-revamp-phqu.vercel.app/",
    githubLink: "https://github.com/Arunitdy/Soul-",
  },
  {
    title: "Soul",
    gui: Soul,
    description: "Soul is an interactive web experience that blends love, romance, and technology through stunning visuals, animations, and heartfelt interactions, making it perfect for digital love letters or creative proposals.",
    techStack: ["HTML", "CSS", "JavaScript", "emailJs.Api"],
    liveLink: "https://soul-xi.vercel.app/",
    githubLink: "https://github.com/Arunitdy/gemini-revamp",
  },
];

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
