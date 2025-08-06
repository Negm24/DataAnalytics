// src/App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [view, setView] = useState("dashboard"); // dashboard, lecture, category
  const [currentLecture, setCurrentLecture] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Lectures data with all content categories
  const lectures = [
    {
      id: 1,
      title: "Lecture 1: Introduction to AI & ML",
      description:
        "Fundamental concepts, automation vs autonomy, and ML applications",
      categories: {
        flashcards: [
          {
            front: "What is Artificial Intelligence (AI)?",
            back: "The ability of machines to perform human capabilities such as thinking, speaking, memorizing, learning, understanding, and writing.",
          },
          {
            front: "What can't AI do that humans can?",
            back: "Feel emotions, lie intentionally, forget intentionally, get sick, age biologically, or dream.",
          },
          {
            front: "What senses can AI mimic?",
            back: "Vision and hearing. It cannot taste, smell, or touch.",
          },
          {
            front: "Automation vs Autonomy",
            back: "Automation: Repeats predefined tasks without decision-making. Autonomy: Operates independently with decision-making capabilities.",
          },
          {
            front: "Hierarchy of AI",
            back: "1. Deep Learning → 2. Machine Learning → 3. Artificial Intelligence",
          },
          {
            front: "Classification vs Regression",
            back: "Classification: Categorizes data (e.g., spam detection). Regression: Predicts continuous values (e.g., house prices).",
          },
        ],
        tables: [
          {
            title: "AI Capabilities vs Limitations",
            headers: ["Capabilities", "Limitations"],
            rows: [
              ["Thinking, Learning", "Feeling, Dreaming"],
              ["Vision, Hearing", "Taste, Smell, Touch"],
              ["Data Processing", "Emotional Understanding"],
            ],
          },
          {
            title: "Automation vs Autonomy",
            headers: ["Feature", "Automation", "Autonomy"],
            rows: [
              ["Decision-making", "None", "Independent"],
              ["Adaptability", "Low", "High"],
              ["Example", "Assembly line robot", "Self-driving car"],
            ],
          },
          {
            title: "ML in Social Media",
            headers: ["Platform", "Data Used", "Application"],
            rows: [
              [
                "Facebook",
                "Posts, videos, engagement",
                "News feed personalization",
              ],
              ["YouTube", "Watch history, searches", "Video recommendations"],
              ["Instagram", "Images, interactions", "Content discovery"],
            ],
          },
        ],
        definitions: [
          {
            term: "AI",
            definition:
              "Artificial Intelligence: The simulation of human intelligence processes by machines.",
          },
          {
            term: "Machine Learning",
            definition:
              "A subset of AI that enables systems to learn from data without explicit programming.",
          },
          {
            term: "Classification",
            definition:
              "ML task of categorizing inputs into predefined classes or groups.",
          },
          {
            term: "Regression",
            definition:
              "ML task of predicting continuous numerical values based on input data.",
          },
          {
            term: "Automation",
            definition:
              "Technology that performs predefined tasks repeatedly without human intervention.",
          },
          {
            term: "Autonomy",
            definition:
              "Ability of systems to operate independently and make decisions without human oversight.",
          },
        ],
        examples: [
          {
            title: "Binary Classification",
            content:
              "Example: Email spam detection\n- Input: Email content\n- Output: Spam (Yes) or Not Spam (No)",
          },
          {
            title: "Multi-class Classification",
            content:
              "Example: Handwritten digit recognition (MNIST)\n- Input: Image of digit\n- Output: 0, 1, 2, ..., 9",
          },
          {
            title: "Regression Example",
            content:
              "Example: House price prediction\n- Input: Square footage, location, rooms\n- Output: Estimated price ($)",
          },
          {
            title: "Social Media ML",
            content:
              "How YouTube recommends videos:\n1. Tracks watch history\n2. Analyzes engagement\n3. Compares with similar users\n4. Predicts next video",
          },
        ],
        diagrams: [
          {
            title: "Hierarchy of AI",
            content:
              "1. Automation → 2. Autonomy → 3. Intelligence\n(Increasing decision-making capability)",
          },
          {
            title: "ML Process",
            content: "Input Data → Feature Extraction → ML Model → Predictions",
          },
          {
            title: "Classification Types",
            content:
              "Binary (Yes/No)\n↓\nMulti-class (Cat/Dog/Bird)\n↓\nMulti-label (Car+Person)",
          },
        ],
        allContent: [
          {
            title: "Key Concepts",
            content: [
              "• AI mimics human capabilities but not emotions",
              "• Automation vs Autonomy: Key difference is decision-making",
              "• ML enables systems to learn from data patterns",
            ],
          },
          {
            title: "Real-world Applications",
            content: [
              "• Social media personalization algorithms",
              "• Predictive maintenance in automotive industry",
              "• Medical diagnosis assistance",
            ],
          },
        ],
      },
    },
    {
      id: 2,
      title: "Lecture 2: Types of Machine Learning",
      description:
        "Supervised, unsupervised, reinforcement learning, and model building",
      categories: {
        flashcards: [
          {
            front: "Supervised Learning",
            back: "Uses labeled data to train models. Examples: Classification and Regression.",
          },
          {
            front: "Unsupervised Learning",
            back: "Discovers patterns in unlabeled data. Examples: Clustering and Dimensionality reduction.",
          },
          {
            front: "Reinforcement Learning",
            back: "Learns through rewards/penalties. Examples: Game AI and Robotics.",
          },
          {
            front: "Clustering",
            back: "Grouping similar data points without predefined labels.",
          },
          {
            front: "Neural Networks",
            back: "Computational models inspired by biological neurons, used in supervised learning.",
          },
          {
            front: "ML Model Building Steps",
            back: "1. Pick Data 2. Data Collection and Processing 3. Feature engineering 4. Build ML algorithm & fit data (Model training).",
          },
        ],
        tables: [
          {
            title: "Types of Machine Learning",
            headers: ["Type", "Input Data", "Output", "Examples"],
            rows: [
              [
                "Supervised",
                "Labeled samples",
                "Predictions",
                "Classification, Regression",
              ],
              [
                "Unsupervised",
                "Unlabeled samples",
                "Patterns",
                "Clustering, Dimensionality reduction",
              ],
              [
                "Reinforcement",
                "Environment states",
                "Actions",
                "Game AI, Robotics",
              ],
            ],
          },
          {
            title: "Reinforcement Learning Components",
            headers: ["Component", "Description", "Example (PAC-MAN)"],
            rows: [
              ["State", "Current environment", "Maze layout, ghost positions"],
              ["Action", "Agent's decision", "Move up/down/left/right"],
              ["Reward", "Feedback for action", "+10 for dots, -50 for ghost"],
            ],
          },
          {
            title: "ML Model Building Steps",
            headers: ["Step", "Activities", "Tools"],
            rows: [
              [
                "Data Collection",
                "Gather relevant data",
                "Sensors, APIs, Public datasets",
              ],
              ["Data Processing", "Clean and structure data", "Pandas, NumPy"],
              [
                "Feature Engineering",
                "Extract meaningful features",
                "PCA, Signal processing",
              ],
              [
                "Model Training",
                "Train and validate model",
                "Scikit-learn, TensorFlow",
              ],
            ],
          },
        ],
        definitions: [
          {
            term: "Supervised Learning",
            definition:
              "ML approach using labeled datasets to train algorithms for classification or regression.",
          },
          {
            term: "Unsupervised Learning",
            definition:
              "ML technique that identifies patterns in data without pre-existing labels.",
          },
          {
            term: "Reinforcement Learning",
            definition:
              "ML method where agents learn optimal behaviors through rewards and penalties.",
          },
          {
            term: "Clustering",
            definition:
              "Unsupervised learning technique for grouping similar data points.",
          },
          {
            term: "ANN",
            definition:
              "Artificial Neural Network: Computational model inspired by biological neural networks.",
          },
          {
            term: "Feature Engineering",
            definition:
              "Process of transforming raw data into features that better represent the problem.",
          },
        ],
        examples: [
          {
            title: "Supervised Learning Example",
            content:
              "MNIST Handwritten Digits:\n- Input: 28x28 pixel images\n- Output: Digit classification (0-9)\n- Uses neural networks with weighted connections",
          },
          {
            title: "Clustering Example",
            content:
              "Customer Segmentation:\n- Input: Purchase history, demographics\n- Output: Groups of similar customers\n- Applications: Targeted marketing",
          },
          {
            title: "Reinforcement Learning",
            content:
              "Teaching a car to drive:\n1. Initial random actions\n2. Reward for forward movement\n3. Penalty for crashes\n4. Learns optimal path",
          },
          {
            title: "Feature Engineering",
            content:
              "Battery Failure Prediction:\n- Raw data: Voltage, temperature\n- Engineered features:\n  • Voltage drop rate\n  • Temperature variance\n  • Charge cycle patterns",
          },
        ],
        diagrams: [
          {
            title: "Neural Network Structure",
            content:
              "Input Layer → Hidden Layers (with weights) → Output Layer",
          },
          {
            title: "Clustering Process",
            content:
              "Raw Data → Feature Extraction → Similarity Calculation → Group Assignment",
          },
          {
            title: "Reinforcement Learning Cycle",
            content: "State → Action → Reward → New State → Repeat",
          },
        ],
        allContent: [
          {
            title: "Key Differences",
            content: [
              "• Supervised: Uses labeled data, predictive models",
              "• Unsupervised: Finds hidden patterns in unlabeled data",
              "• Reinforcement: Learns through interaction with environment",
            ],
          },
          {
            title: "Practical Applications",
            content: [
              "• Supervised: Image recognition, spam detection",
              "• Unsupervised: Market segmentation, anomaly detection",
              "• Reinforcement: Game AI, robotics, autonomous systems",
            ],
          },
        ],
      },
    },
  ];

  const renderDashboard = () => (
    <div className="dashboard">
      <h1>AI & Machine Learning Study Guide</h1>
      <p className="subtitle">Organized by Lectures with Study Tools</p>

      <div className="lectures-grid">
        {lectures.map((lecture) => (
          <div
            key={lecture.id}
            className="lecture-card"
            onClick={() => {
              setCurrentLecture(lecture);
              setView("lecture");
            }}
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

  const renderLectureDashboard = () => (
    <div className="lecture-dashboard">
      <div className="lecture-header">
        <button className="back-button" onClick={() => setView("dashboard")}>
          ← All Lectures
        </button>
        <h1>{currentLecture.title}</h1>
        <p className="lecture-description">{currentLecture.description}</p>
      </div>

      <div className="categories-grid">
        <div
          className="category-card"
          onClick={() => {
            setCurrentCategory("flashcards");
            setView("category");
          }}
        >
          <div className="category-icon">📚</div>
          <h3>Flashcards</h3>
          <p>Interactive learning cards</p>
        </div>

        <div
          className="category-card"
          onClick={() => {
            setCurrentCategory("tables");
            setView("category");
          }}
        >
          <div className="category-icon">📊</div>
          <h3>Comparison Tables</h3>
          <p>Visual comparisons</p>
        </div>

        <div
          className="category-card"
          onClick={() => {
            setCurrentCategory("definitions");
            setView("category");
          }}
        >
          <div className="category-icon">📖</div>
          <h3>Definitions</h3>
          <p>Key terms explained</p>
        </div>

        <div
          className="category-card"
          onClick={() => {
            setCurrentCategory("examples");
            setView("category");
          }}
        >
          <div className="category-icon">💡</div>
          <h3>Examples & Analogies</h3>
          <p>Practical illustrations</p>
        </div>

        <div
          className="category-card"
          onClick={() => {
            setCurrentCategory("diagrams");
            setView("category");
          }}
        >
          <div className="category-icon">📐</div>
          <h3>Diagrams</h3>
          <p>Visual representations</p>
        </div>

        <div
          className="category-card"
          onClick={() => {
            setCurrentCategory("allContent");
            setView("category");
          }}
        >
          <div className="category-icon">📝</div>
          <h3>All Content</h3>
          <p>Complete lecture material</p>
        </div>
      </div>
    </div>
  );

  const renderCategoryView = () => {
    const content = currentLecture.categories[currentCategory];

    const renderContent = () => {
      switch (currentCategory) {
        case "flashcards":
          return (
            <div className="flashcards-view">
              <div className="flashcard-container">
                <div
                  className={`flashcard ${isFlipped ? "flipped" : ""}`}
                  onClick={() => setIsFlipped(!isFlipped)}
                >
                  <div className="front">{content[flashcardIndex].front}</div>
                  <div className="back">{content[flashcardIndex].back}</div>
                </div>

                <div className="flashcard-nav">
                  <button
                    onClick={() => {
                      setFlashcardIndex((prev) =>
                        prev > 0 ? prev - 1 : content.length - 1
                      );
                      setIsFlipped(false);
                    }}
                  >
                    ← Previous
                  </button>
                  <span>
                    {flashcardIndex + 1} / {content.length}
                  </span>
                  <button
                    onClick={() => {
                      setFlashcardIndex((prev) =>
                        prev < content.length - 1 ? prev + 1 : 0
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

        case "tables":
          return (
            <div className="tables-view">
              {content.map((table, index) => (
                <div key={index} className="table-container">
                  <h3>{table.title}</h3>
                  <table>
                    <thead>
                      <tr>
                        {table.headers.map((header, i) => (
                          <th key={i}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          );

        case "definitions":
          return (
            <div className="definitions-view">
              <dl>
                {content.map((item, index) => (
                  <div key={index} className="definition-item">
                    <dt>{item.term}</dt>
                    <dd>{item.definition}</dd>
                  </div>
                ))}
              </dl>
            </div>
          );

        case "examples":
          return (
            <div className="examples-view">
              <div className="examples-grid">
                {content.map((example, index) => (
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

        case "diagrams":
          return (
            <div className="diagrams-view">
              <div className="diagrams-grid">
                {content.map((diagram, index) => (
                  <div key={index} className="diagram-card">
                    <h3>{diagram.title}</h3>
                    <div className="diagram-content">{diagram.content}</div>
                  </div>
                ))}
              </div>
            </div>
          );

        case "allContent":
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

        default:
          return <div>Select a category</div>;
      }
    };

    // Get category title for display
    const categoryTitles = {
      flashcards: "Flashcards",
      tables: "Comparison Tables",
      definitions: "Definitions",
      examples: "Examples & Analogies",
      diagrams: "Diagrams",
      allContent: "All Content",
    };

    return (
      <div className="category-view">
        <div className="category-header">
          <button className="back-button" onClick={() => setView("lecture")}>
            ← Back to Categories
          </button>
          <h2>{categoryTitles[currentCategory]}</h2>
          <div className="lecture-info">{currentLecture.title}</div>
        </div>

        <div className="category-content">{renderContent()}</div>
      </div>
    );
  };

  return (
    <div className="app">
      <header>
        <h1>Negm Data Analytics Study Guide</h1>
        {view !== "dashboard" && (
          <button className="home-btn" onClick={() => setView("dashboard")}>
            Home
          </button>
        )}
      </header>

      <main>
        {view === "dashboard" && renderDashboard()}
        {view === "lecture" && renderLectureDashboard()}
        {view === "category" && renderCategoryView()}
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
