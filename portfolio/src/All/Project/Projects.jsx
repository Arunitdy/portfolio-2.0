import React, { useState } from "react";
import "./Projects.css"; 

// Import images correctly
import FDMS from "../logos/projectGui/FDMS.jpg";
import Portfolio from "../logos/projectGui/portfolio.png";
import Activity from "../logos/projectGui/activity.png";
import Smart from "../logos/projectGui/smart.png";
import Soul from "../logos/projectGui/soul.png";
import GDG from "../logos/projectGui/GDG.png"

// Projects Data
const projects = [
  {
    title: "Activity Points System",
    gui: Activity,
    description: "A system designed to track and manage student activity points using Firestore as the backend database. It enables students to upload proof of participation in extracurricular and co-curricular activities, while faculty members can verify submissions and assign points. The system ensures secure storage, streamlined evaluation, and easy retrieval of student achievements over time.",
    techStack: ["React", "Firebase", "Postman", "Cypress", "Vite"],
    liveLink: "https://activity-points.vercel.app/",
    githubLink: "https://github.com/1518manu/ActivityPoints.git",
  },
  {
    title: "Food Care",
    gui: FDMS,
    description: "A web-based food donation and distribution management system designed to connect donors, distribution centers, and recipients. The platform streamlines the process of donating surplus food, tracking donations, managing distribution logistics, and ensuring timely delivery to those in need. It promotes efficient resource utilization and reduces food waste through real-time coordination and transparency.",
    techStack: ["React", "Spring Boot", "MySQL", "GeminiAI Api", "EmailJs Api"],
    liveLink: "",
    githubLink: "https://github.com/Arunitdy/Food-Donation-and-Distribution-Management-System",
  },
 /* {
    title: "Portfolio 2.0",
    gui: Portfolio,
    description: "A modern developer portfolio built with React and Vite.",
    techStack: ["React", "Vite", "Docker"],
    liveLink: "https://portfolio-2-0-wyqk.vercel.app/",
    githubLink: "https://github.com/Arunitdy/portfolio-2.0",
  },*/
  {
    title: "Smart-Energy-Meter",
    gui: Smart,
    description: "A smart energy meter that monitors real-time power consumption and transmits data to the Blynk cloud platform. It allows users to remotely track energy usage through a mobile application, set alerts for abnormal consumption, and analyze usage patterns to promote energy efficiency and cost savings.",
    techStack: ["React", "Blynk Cloud"],
    liveLink: "https://smart-energy-meter-three.vercel.app/",
    githubLink: "https://github.com/Arunitdy/Smart-Energy-Meter",
  },
  {
    title: "Devcation'25- GDG On Campus IGDTUW",
    gui: GDG,
    description: "Devcation'25 is the technical festival organized by Google Developer Groups OnCampus - Indira Gandhi Delhi Technical University for Women that celebrates diversity in the TechForGood Domain. During the week, we have the Devcation'25 hackathon: Hack 'N' Solve. ",
    techStack: ["React", "Vite","CSS"],
    liveLink: "https://gemini-revamp-phqu.vercel.app/",
    githubLink: "https://github.com/Arunitdy/gemini-revamp",
  },
  {
    title: "Soul",
    gui: Soul,
    description: "Soul an interactive love proposal web application featuring a real-time chat option using Firebase Firestore. Integrated a poetic UI, custom animations, and personalized response handling to create an emotionally engaging and memorable user experience. ",
    techStack: ["HTML", "CSS", "JavaScript", "Firebase", "emailJs.Api"],
    liveLink: "https://soul-xi.vercel.app/",
    githubLink: "https://github.com/Arunitdy/Soul-",
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
