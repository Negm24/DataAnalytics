// src/components/DefinitionsView.js
import React from "react";

const DefinitionsView = ({ definitions }) => {
  return (
    <div className="definitions-view">
      <dl>
        {definitions.map((item, index) => (
          <div key={index} className="definition-item">
            <dt>{item.term}</dt>
            <dd>{item.definition}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default DefinitionsView;
