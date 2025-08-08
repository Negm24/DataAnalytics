// src/components/ExamplesView.js
import React from "react";

const ExamplesView = ({ examples }) => {
  return (
    <div className="examples-view">
      <div className="examples-grid">
        {examples.map((example, index) => (
          <div key={index} className="example-card">
            <h3>{example.title}</h3>
            <div className="example-content">
              {example.content.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamplesView;
