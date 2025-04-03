import React, { useEffect, useState, useRef } from "react";
import { SkillBar } from "./SkillBar/SkillBar";
import "./Skills.css";

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "C", percentage: 80, website: "https://www.open-std.org/jtc1/sc22/wg14/" },
      { name: "Java", percentage: 85, website: "https://www.java.com/" },
      { name: "Python", percentage: 70, website: "https://www.python.org/" },
      { name: "JavaScript", percentage: 90, website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", percentage: 85, website: "https://react.dev/" },
      { name: "Express.js", percentage: 75, website: "https://expressjs.com/" },
      { name: "MySQL", percentage: 80, website: "https://www.mysql.com/" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Postman", percentage: 70, website: "https://www.postman.com/" },
      { name: "Firebase", percentage: 80, website: "https://firebase.google.com/" },
      { name: "Vite", percentage: 65, website: "https://vitejs.dev/" },
      { nmae: "Docker", percentage: 50, website: "https://www.docker.com/" },
      { name: "Github", percentage: 70, website: " https://github.com/ "},
      { name: "Git", percentage: 80, website: " https://git-scm.com/ "},
    ],
  },
  {
    category: "Other",
    skills: [
      { name: "HTML", percentage: 95, website: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS", percentage: 90, website: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    ],
  },
];

export const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState(
    skillsData.map((category) => ({
      ...category,
      skills: category.skills.map((skill) => ({ ...skill, animatedPercentage: 0 })),
    }))
  );

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after animation starts
        }
      },
      { threshold: 0.5 } // 50% of the section should be visible before triggering animation
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      setAnimatedSkills(
        skillsData.map((category) => ({
          ...category,
          skills: category.skills.map((skill) => ({
            ...skill,
            animatedPercentage: skill.percentage,
          })),
        }))
      );
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="skills-container">
      <h2 className="skills-title"><span>My</span> Skills</h2>
      <div className="skills-section">
        {animatedSkills.map((section, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{section.category}</h3>
            <div className="skills-grid">
              {section.skills.map((skill, i) => (
                <div key={i} className="skill-box">
                  <div >
                    <a className="skill-name" href={skill.website} target="_blank" rel="noreferrer">
                      {skill.name}
                    </a>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${skill.animatedPercentage}%`,
                        transition: "width 1.5s ease-in-out",
                      }}
                    ></div>
                  </div>
                  <div className="skill-percentage">{skill.animatedPercentage}%</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <SkillBar />
    </div>
  );
};
