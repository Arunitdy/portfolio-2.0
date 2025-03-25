import React from "react";
import { FaDotCircle,FaArrowRight } from "react-icons/fa";
import "./Timeline.css";

const timelineData = [
  {
    year: "2022",
    skill: "C Programming",
    description: "Started learning foundational programming concepts."
  },
  {
    year: "2023",
    skill: "DSA, Java, OOP",
    description: "Dived into problem-solving with Java & Object-Oriented Programming."
  },
  {
    year: "2024",
    skill: "MySQL, DBMS, JavaScript, React",
    description: "Explored databases & front-end development."
  },
  {
    year: "2025",
    skill: "Firebase, Express.js",
    description: "Learning backend development with cloud services."
  },
];

export const Timeline = () => {
  return (
    <div className="timeline-container">
      <h2 className="timeline-title">My Learning Journey</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className={`timeline-item ${item.position}`}>
            
            <div className="timeline-content">
              
              <h3><FaArrowRight size ="16px" />{item.year}</h3>
              <strong>{item.skill}</strong>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


