import React from "react";
import "./SkillBar.css";

// Skill logos (Replace these with actual logo images)
import cLogo from "../../logos/ProfileImg.jpg";
import javaLogo from "../../logos/ProfileImg.jpg";
import pythonLogo from "../../logos/ProfileImg.jpg";
import jsLogo from "../../logos/ProfileImg.jpg";
import htmlLogo from "../../logos/ProfileImg.jpg";
import cssLogo from "../../logos/ProfileImg.jpg";
import reactLogo from "../../logos/ProfileImg.jpg";
import expressLogo from "../../logos/ProfileImg.jpg";
import mysqlLogo from "../../logos/ProfileImg.jpg";
import postmanLogo from "../../logos/ProfileImg.jpg";
import firebaseLogo from "../../logos/ProfileImg.jpg";
import viteLogo from "../../logos/ProfileImg.jpg";

const skills = [
  { name: "C", logo: cLogo },
  { name: "Java", logo: javaLogo },
  { name: "Python", logo: pythonLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "React", logo: reactLogo },
  { name: "Express.js", logo: expressLogo },
  { name: "MySQL", logo: mysqlLogo },
  { name: "Postman", logo: postmanLogo },
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
                <img src={skill.logo} alt={skill.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};
