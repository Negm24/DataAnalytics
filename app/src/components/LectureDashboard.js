// src/components/LectureDashboard.js
import React from "react";

const LectureDashboard = ({ lecture, onBack, onSelectCategory }) => {
  return (
    <div className="lecture-dashboard">
      <div className="lecture-header">
        <button className="back-button" onClick={onBack}>
          ← All Lectures
        </button>
        <h1>{lecture.title}</h1>
        <p className="lecture-description">{lecture.description}</p>
      </div>

      <div className="categories-grid">
        <div
          className="category-card"
          onClick={() => onSelectCategory("flashcards")}
        >
          <div className="category-icon">📚</div>
          <h3>Flashcards</h3>
          <p>Interactive learning cards</p>
        </div>

        <div
          className="category-card"
          onClick={() => onSelectCategory("tables")}
        >
          <div className="category-icon">📊</div>
          <h3>Comparison Tables</h3>
          <p>Visual comparisons</p>
        </div>

        <div
          className="category-card"
          onClick={() => onSelectCategory("definitions")}
        >
          <div className="category-icon">📖</div>
          <h3>Definitions</h3>
          <p>Key terms explained</p>
        </div>

        <div
          className="category-card"
          onClick={() => onSelectCategory("examples")}
        >
          <div className="category-icon">💡</div>
          <h3>Examples & Analogies</h3>
          <p>Practical illustrations</p>
        </div>

        <div
          className="category-card"
          onClick={() => onSelectCategory("diagrams")}
        >
          <div className="category-icon">📐</div>
          <h3>Diagrams</h3>
          <p>Visual representations</p>
        </div>

        <div
          className="category-card"
          onClick={() => onSelectCategory("allContent")}
        >
          <div className="category-icon">📝</div>
          <h3>All Content</h3>
          <p>Complete lecture material</p>
        </div>
      </div>
    </div>
  );
};

export default LectureDashboard;
