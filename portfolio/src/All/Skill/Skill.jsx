import React from "react";
import "./Skil.css";

const skillsData = [
  { name: "React", level: "85%" },
  { name: "JavaScript", level: "90%" },
  { name: "MySQL", level: "75%" },
  { name: "Express.js", level: "80%" },
];


export const Skills = () => {
  return (
    <div className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill" key={index}>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

