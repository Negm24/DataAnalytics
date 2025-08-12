// src/components/DiagramsView.js
import React from "react";

// Import images from lecture 3
import ControlFlow from "../images/ControlFlow.png";
import Loop from "../images/Loop.png";
import StringIndexing from "../images/StartIndexing.png";

// Import images from lecture 4
import FiveVs from "../images/FiveVs.png";
import PythonDataTypes from "../images/PythonDataTypes.png";
import VisualizationStatistics from "../images/VisualizationStatistics.png";

const DiagramsView = ({ diagrams }) => {
  // Create a mapping of image filenames to imported images
  const imageMap = {
    "ControlFlow.png": ControlFlow,
    "Loop.png": Loop,
    "StartIndexing.png": StringIndexing,
    "FiveVs.png": FiveVs,
    "PythonDataTypes.png": PythonDataTypes,
    "VisualizationStatistics.png": VisualizationStatistics,
  };

  return (
    <div className="diagrams-view">
      <div className="diagrams-grid">
        {diagrams.map((diagram, index) => {
          // Check if content is an image reference
          const isImage = Object.keys(imageMap).includes(diagram.content);

          return (
            <div key={index} className="diagram-card">
              <h3>{diagram.title}</h3>
              {isImage ? (
                // Render image if content matches an image file
                <img
                  src={imageMap[diagram.content]}
                  alt={diagram.title}
                  className="diagram-image"
                />
              ) : (
                // Otherwise render as text content
                <div className="diagram-content">
                  {diagram.content.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DiagramsView;
