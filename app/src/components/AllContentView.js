// src/components/AllContentView.js
import React from "react";

const AllContentView = ({ content }) => {
  return (
    <div className="all-content-view">
      {content.map((section, index) => (
        <div key={index} className="content-section">
          <h3>{section.title}</h3>
          <ul>
            {section.content.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AllContentView;
