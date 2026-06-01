import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { timelineData } from "../../data";
import "./Timeline.css";

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
