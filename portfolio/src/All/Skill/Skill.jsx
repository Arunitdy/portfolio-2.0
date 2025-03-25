import React, { useEffect, useState, useRef } from "react";
import { SkillBar } from "./SkillBar/SkillBar";
import "./Skills.css";

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "C", percentage: 80 },
      { name: "Java", percentage: 85 },
      { name: "Python", percentage: 70 },
      { name: "JavaScript", percentage: 90 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", percentage: 85 },
      { name: "Express.js", percentage: 75 },
      { name: "MySQL", percentage: 80 },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Postman", percentage: 70 },
      { name: "Firebase", percentage: 80 },
      { name: "Vite", percentage: 65 },
    ],
  },{
    category: "Other",
    skills: [
      { name: "HTML", percentage: 95 },
      { name: "CSS", percentage: 90 },
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
                  <div className="skill-name">{skill.name}</div>
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
      <SkillBar/>
    </div>
  );
};
