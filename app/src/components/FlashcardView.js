// src/components/FlashcardView.js
import React, { useEffect, useState } from "react";

const FlashcardView = ({ flashcards, lecture }) => {
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [codeSnippet, setCodeSnippet] = useState("");

  useEffect(() => {
    if (lecture.id === 3) {
      setCodeSnippet(
        "greetings = 'Congratulations,'\n" +
          "results = 'You have won 100 dollars!'"
      );
    }
  }, [lecture.id]);

  return (
    <div className="flashcards-view">
      <div className="flashcard-container">
        {lecture.id === 3 && (
          <div className="code-snippet">
            <pre>{codeSnippet}</pre>
          </div>
        )}
        <div
          className={`flashcard ${isFlipped ? "flipped" : ""}`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="front">{flashcards[flashcardIndex].front}</div>
          <div className="back">{flashcards[flashcardIndex].back}</div>
        </div>

        <div className="flashcard-nav">
          <button
            onClick={() => {
              setFlashcardIndex((prev) =>
                prev > 0 ? prev - 1 : flashcards.length - 1
              );
              setIsFlipped(false);
            }}
          >
            ← Previous
          </button>
          <span>
            {flashcardIndex + 1} / {flashcards.length}
          </span>
          <button
            onClick={() => {
              setFlashcardIndex((prev) =>
                prev < flashcards.length - 1 ? prev + 1 : 0
              );
              setIsFlipped(false);
            }}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashcardView;
