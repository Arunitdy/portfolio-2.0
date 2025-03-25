import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Timeline.css";

const timelineData = [
  {
    year: "2022",
    skills: ["C Programming"],
    description: "Started learning foundational programming concepts."
  },
  {
    year: "2023",
    skills: ["DSA", "Java", "OOP"],
    description: "Dived into problem-solving with Java & Object-Oriented Programming."
  },
  {
    year: "2024",
    skills: ["MySQL", "DBMS", "JavaScript", "React"],
    description: "Explored databases & front-end development."
  },
  {
    year: "2025",
    skills: ["Firebase", "Express.js"],
    description: "Learning backend development with cloud services."
  },
];

export const Timeline = () => {
  return (
    <div className="timeline-container">
      <h2 className="timeline-title">My Learning Journey</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline_c">
              <FaArrowRight className="arro" />
              <div className="timeline-content">
                <h3>{item.year}</h3>
                <div className="skill-list">
                  {item.skills.map((skill, i) => (
                    <div key={i} className="skill-item">
                      {skill}
                    </div>
                  ))}
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
