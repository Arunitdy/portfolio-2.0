import React from "react";
import "./SkillBar.css";

import cLogo from "../../logos/png/c-removebg-preview.png";
import javaLogo from "../../logos/png/java-removebg-preview.png";
import pythonLogo from "../../logos/png/python-removebg-preview.png";
import jsLogo from "../../logos/png/javascript-removebg-preview.png";
import htmlLogo from "../../logos/png/html-removebg-preview.png";
import cssLogo from "../../logos/png/css-removebg-preview.png";
import reactLogo from "../../logos/png/react-removebg-preview.png";
import mysqlLogo from "../../logos/png/mysql-removebg-preview.png";
import firebaseLogo from "../../logos/png/firebase-removebg-preview.png";
import dockerLogo from "../../logos/png/docker-removebg-preview.png";
import gitLogo from "../../logos/png/git.png";
import gitHubLogo from "../../logos/png/github.png";

const skills = [
  { name: "C", logo: cLogo, website: "https://www.open-std.org/jtc1/sc22/wg14/" },
  { name: "Java", logo: javaLogo, website: "https://www.java.com/" },
  { name: "Python", logo: pythonLogo, website: "https://www.python.org/" },
  { name: "JavaScript", logo: jsLogo, website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "HTML", logo: htmlLogo, website: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", logo: cssLogo, website: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "React", logo: reactLogo, website: "https://react.dev/" },
  { name: "MySQL", logo: mysqlLogo, website: "https://www.mysql.com/" },
  { name: "Firebase", logo: firebaseLogo, website: "https://firebase.google.com/" },
  { name: "Docker", logo: dockerLogo, website: "https://www.docker.com/" },
  { name: "Github", logo: gitHubLogo, website: " https://github.com/ "},
  { name: "Git", logo: gitLogo, website: " https://git-scm.com/ "},
];

export const SkillBar = () => {
    return (
      <div className="skills-bar-container">
        <div className="skills-bar">
          {/* Seamless looping by duplicating elements */}
          <div className="scrolling-logos">
            {[...skills, ...skills].map((skill, index) => (
              <a key={index} href={skill.website} target="_blank" rel="noreferrer">
                <div className="skill-logo">
                  <img src={skill.logo} alt={skill.name} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
};
