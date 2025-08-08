// src/App.js
import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import LectureDashboard from "./components/LectureDashboard";
import CategoryView from "./components/CategoryView";
import { lectures } from "./data/lectures";

function App() {
  const [view, setView] = useState("dashboard");
  const [currentLecture, setCurrentLecture] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(null);

  const handleSelectLecture = (lecture) => {
    setCurrentLecture(lecture);
    setView("lecture");
  };

  const handleSelectCategory = (category) => {
    setCurrentCategory(category);
    setView("category");
  };

  const handleBackToDashboard = () => setView("dashboard");
  const handleBackToLecture = () => setView("lecture");

  return (
    <div className="app">
      <header>
        <h1>Negm Data Analytics Study Guide</h1>
        {view !== "dashboard" && (
          <button className="home-btn" onClick={handleBackToDashboard}>
            Home
          </button>
        )}
      </header>

      <main>
        {view === "dashboard" && (
          <Dashboard
            lectures={lectures}
            onSelectLecture={handleSelectLecture}
          />
        )}
        {view === "lecture" && (
          <LectureDashboard
            lecture={currentLecture}
            onBack={handleBackToDashboard}
            onSelectCategory={handleSelectCategory}
          />
        )}
        {view === "category" && (
          <CategoryView
            lecture={currentLecture}
            category={currentCategory}
            onBack={handleBackToLecture}
          />
        )}
      </main>

      <footer>
        <div className="nav-info">
          {view === "category" ? (
            <span>
              {currentLecture.title} • {currentCategory}
            </span>
          ) : view === "lecture" ? (
            <span>{currentLecture.title}</span>
          ) : (
            <span>Study Guide Dashboard</span>
          )}
        </div>
      </footer>
    </div>
  );
}

export default App;
