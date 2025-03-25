import React from "react";
import "./SkillBar.css";

import cLogo from "../../logos/png/c_-removebg-preview.png";
import javaLogo from "../../logos/png/java-removebg-preview.png";
import pythonLogo from "../../logos/png/python-removebg-preview.png";
import jsLogo from "../../logos/png/javascript-removebg-preview.png";
import htmlLogo from "../../logos/png/html-removebg-preview.png";
import cssLogo from "../../logos/png/css-removebg-preview.png";
import reactLogo from "../../logos/png/react-removebg-preview.png";
import mysqlLogo from "../../logos/png/mysql-removebg-preview.png";
import firebaseLogo from "../../logos/png/firebase-removebg-preview.png";


const skills = [
  { name: "C", logo: cLogo },
  { name: "Java", logo: javaLogo },
  { name: "Python", logo: pythonLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "React", logo: reactLogo },
  { name: "MySQL", logo: mysqlLogo },
  { name: "Firebase", logo: firebaseLogo },
];

export const SkillBar = () => {
    return (
      <div className="skills-bar-container">
        <div className="skills-bar">
          {/* Seamless looping by duplicating elements */}
          <div className="scrolling-logos">
            {[...skills, ...skills].map((skill, index) => (
              <div key={index} className="skill-logo">
                <img src={skill.logo} alt={skill.name} type="image/svg+xml"  />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};
