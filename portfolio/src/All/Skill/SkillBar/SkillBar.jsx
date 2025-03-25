import React from "react";
import "./SkillBar.css";

import cLogo from "../../logos/c.svg";
import javaLogo from "../../logos/java.svg";
import pythonLogo from "../../logos/python.svg";
import jsLogo from "../../logos/javascript.svg";
import htmlLogo from "../../logos/html.svg";
import cssLogo from "../../logos/css.svg";
import reactLogo from "../../logos/react.svg";
import mysqlLogo from "../../logos/mysql.svg";
import firebaseLogo from "../../logos/firebase.svg";
import viteLogo from "../../../../public/vite.svg";


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
  { name: "Vite", logo: viteLogo },
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
