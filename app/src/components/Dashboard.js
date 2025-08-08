// src/components/Dashboard.js
import React from "react";

const Dashboard = ({ lectures, onSelectLecture }) => {
  return (
    <div className="dashboard">
      <h1>Data Analytics Lectures</h1>
      <p className="subtitle">A+ Inshallah</p>

      <div className="lectures-grid">
        {lectures.map((lecture) => (
          <div
            key={lecture.id}
            className="lecture-card"
            onClick={() => onSelectLecture(lecture)}
          >
            <div className="lecture-header">
              <div className="lecture-number">{lecture.id}</div>
              <h2>{lecture.title}</h2>
              <p className="lecture-description">{lecture.description}</p>
            </div>
            <div className="categories-preview">
              <div className="category-badge">Flashcards</div>
              <div className="category-badge">Tables</div>
              <div className="category-badge">Definitions</div>
              <div className="category-badge">Examples</div>
              <div className="category-badge">Diagrams</div>
              <div className="category-badge">All Content</div>
            </div>
          </div>
        ))}

        {/* Placeholder for future lectures */}
        <div className="lecture-card future">
          <div className="lecture-header">
            <div className="lecture-number">3</div>
            <h2>Advanced ML Concepts</h2>
            <p className="lecture-description">Coming soon...</p>
          </div>
          <div className="placeholder">
            <div className="plus-icon">+</div>
            <p>Add new lecture</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
