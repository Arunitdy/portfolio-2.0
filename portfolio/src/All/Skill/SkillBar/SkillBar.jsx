import React from "react";
import "./SkillBar.css";

import cLogo from "../../logos/png/c.png";
import javaLogo from "../../logos/png/java.png";
import pythonLogo from "../../logos/png/python.png";
import jsLogo from "../../logos/png/javascript.png";
import htmlLogo from "../../logos/png/html.png";
import cssLogo from "../../logos/png/css.png";
import reactLogo from "../../logos/png/react.png";
import mysqlLogo from "../../logos/png/mysql.png";
import firebaseLogo from "../../logos/png/firebase.png";


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
