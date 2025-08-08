// src/components/CategoryView.js
import React from "react";
import FlashcardView from "./FlashcardView";
import TablesView from "./TablesView";
import DefinitionsView from "./DefinitionsView";
import ExamplesView from "./ExamplesView";
import DiagramsView from "./DiagramsView";
import AllContentView from "./AllContentView";

const CategoryView = ({ lecture, category, onBack }) => {
  const content = lecture.getCategoryContent(category);

  // Get category title for display
  const categoryTitles = {
    flashcards: "Flashcards",
    tables: "Comparison Tables",
    definitions: "Definitions",
    examples: "Examples & Analogies",
    diagrams: "Diagrams",
    allContent: "All Content",
  };

  const renderContent = () => {
    switch (category) {
      case "flashcards":
        return <FlashcardView flashcards={content} lecture={lecture} />;
      case "tables":
        return <TablesView tables={content} />;
      case "definitions":
        return <DefinitionsView definitions={content} />;
      case "examples":
        return <ExamplesView examples={content} />;
      case "diagrams":
        return <DiagramsView diagrams={content} />;
      case "allContent":
        return <AllContentView content={content} />;
      default:
        return <div>Select a category</div>;
    }
  };

  return (
    <div className="category-view">
      <div className="category-header">
        <button className="back-button" onClick={onBack}>
          ← Back to Categories
        </button>
        <h2>{categoryTitles[category]}</h2>
        <div className="lecture-info">{lecture.title}</div>
      </div>

      <div className="category-content">{renderContent()}</div>
    </div>
  );
};

export default CategoryView;
