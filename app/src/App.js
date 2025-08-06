// src/App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const flashcards = [
    {
      front: "What is Artificial Intelligence (AI)?",
      back: "The ability of machines to mimic human capabilities (e.g., thinking, learning, understanding).",
    },
    {
      front: "Name 3 things AI cannot do.",
      back: "Feel emotions, lie intentionally, age biologically.",
    },
    {
      front: "What's the difference between automation and autonomy?",
      back: "Automation: Repeats predefined tasks (no decisions). Autonomy: Makes independent decisions (e.g., self-driving cars).",
    },
    {
      front: "What are two types of Machine Learning tasks?",
      back: "Classification (categorizing data) and Regression (predicting continuous values).",
    },
    {
      front: "Give an example of AI in social media.",
      back: "YouTube's recommendation algorithm (suggests videos based on watch history).",
    },
    {
      front: "What are the 3 main types of Machine Learning?",
      back: "Supervised, Unsupervised, Reinforcement Learning.",
    },
    {
      front: "What input does Supervised Learning require?",
      back: "Labeled data (data samples + target labels).",
    },
    {
      front: "What is the core mechanism of Reinforcement Learning?",
      back: "Penalty vs. reward system to maximize cumulative rewards.",
    },
    {
      front: "What problem does clustering solve in Unsupervised Learning?",
      back: "Grouping unlabeled data based on inherent patterns.",
    },
    {
      front: "Name the 4 steps to build an ML model.",
      back: "Data acquisition → Data processing → Feature engineering → Build & train ML algorithm.",
    },
  ];

  const definitions = [
    {
      term: "AI",
      definition:
        "Machines simulating human intelligence (learning, problem-solving).",
    },
    {
      term: "Machine Learning",
      definition:
        "AI subset where systems learn from data without explicit programming.",
    },
    {
      term: "Classification",
      definition: "Categorizing data into classes (e.g., spam vs. not spam).",
    },
    {
      term: "Regression",
      definition: "Predicting numerical values (e.g., house prices).",
    },
    {
      term: "Autonomy",
      definition: "Systems operating independently in dynamic environments.",
    },
    {
      term: "Supervised Learning",
      definition:
        "Learns from labeled data to predict outcomes (e.g., classification/regression).",
    },
    {
      term: "Unsupervised Learning",
      definition: "Discovers patterns in unlabeled data (e.g., clustering).",
    },
    {
      term: "Reinforcement Learning",
      definition:
        "Agent learns via penalties/rewards in an environment (e.g., game AI).",
    },
    {
      term: "Feature Engineering",
      definition:
        "Transforming raw data into meaningful features for ML models.",
    },
    {
      term: "Artificial Neural Network",
      definition:
        "Computational model inspired by biological neurons (used in supervised learning).",
    },
  ];

  const tables = [
    {
      title: "AI Capabilities vs. Limitations",
      headers: ["Capabilities", "Limitations"],
      rows: [
        ["Learning from data", "Cannot feel emotions"],
        ["Understanding language", "Cannot age or get sick"],
        ["Recognizing images", "Limited creativity (e.g., art)"],
      ],
    },
    {
      title: "Classification vs. Regression",
      headers: ["Aspect", "Classification", "Regression"],
      rows: [
        [
          "Output",
          "Categories (e.g., yes/no)",
          "Numerical value (e.g., $500K)",
        ],
        [
          "Examples",
          "Spam detection, MNIST digits",
          "House prices, COVID-19 cases",
        ],
      ],
    },
    {
      title: "Automation vs. Autonomy",
      headers: ["Feature", "Automation", "Autonomy"],
      rows: [
        ["Decision-making", "Follows fixed rules", "Adapts to new situations"],
        ["Example", "Dishwasher", "Self-driving car"],
      ],
    },
    {
      title: "Types of Machine Learning",
      headers: ["Type", "Input Data", "Goal", "Examples"],
      rows: [
        [
          "Supervised",
          "Labeled samples",
          "Predict labels/values",
          "Image classification, House price prediction",
        ],
        [
          "Unsupervised",
          "Unlabeled samples",
          "Discover hidden patterns",
          "Customer segmentation, Anomaly detection",
        ],
        [
          "Reinforcement",
          "Environment states",
          "Maximize cumulative reward",
          "Self-driving cars, Game AI (PACMAN)",
        ],
      ],
    },
    {
      title: "Reinforcement Learning Components",
      headers: ["Component", "Role", "Example (PACMAN)"],
      rows: [
        [
          "State",
          "Current environment snapshot",
          "Maze layout, ghost positions",
        ],
        ["Action", "Decision made by the agent", "Move up/down/left/right"],
        [
          "Reward",
          "Feedback for actions (+/-)",
          "+10 for eating dots, -50 for ghost collision",
        ],
      ],
    },
    {
      title: "ML Model-Building Steps",
      headers: ["Step", "Key Activities", "Tools/Techniques"],
      rows: [
        [
          "Data Acquisition",
          "Collect raw data from sensors/public datasets",
          "APIs, IoT sensors, Kaggle",
        ],
        [
          "Data Processing",
          "Clean, structure, and visualize data",
          "Pandas, NumPy, Matplotlib",
        ],
        [
          "Feature Engineering",
          "Extract meaningful features (e.g., fault signatures)",
          "PCA, signal processing",
        ],
        [
          "Model Building",
          "Train algorithm (e.g., ANN, clustering)",
          "Scikit-learn, TensorFlow, PyTorch",
        ],
      ],
    },
  ];

  const examples = [
    {
      title: "Reinforcement Learning Analogy",
      content:
        "Like teaching a dog tricks:\n- Action: Dog sits on command\n- Reward: Treat (+1)\n- Penalty: Ignore incorrect action (-1)",
    },
    {
      title: "Feature Engineering Example",
      content:
        "Problem: Predict battery failures\n\nRaw data: Voltage, temperature, charge cycles\n\nEngineered features:\n- voltage_drop_rate\n- avg_temp_last_24hr\n- charge_cycle_variance",
    },
    {
      title: "Classification Example",
      content:
        "Binary: Is this email spam? (Yes/No)\nMulti-class: Is this image a cat, dog, or bird?\nMulti-label: What objects are in this image? (car, person, tree)",
    },
    {
      title: "Regression Example",
      content:
        "Predicting tomorrow's temperature based on:\n- Historical temperatures\n- Humidity levels\n- Wind speed\n- Time of year",
    },
    {
      title: "Clustering Example",
      content:
        "Grouping customers based on:\n- Purchase history\n- Browsing behavior\n- Demographic data\n\nTo create targeted marketing segments",
    },
  ];

  const diagrams = [
    {
      title: "Supervised Learning Workflow",
      content: "Labeled Data → ML Algorithm → Predictions",
    },
    {
      title: "Reinforcement Learning Cycle",
      content: "State → Action → Reward/Penalty → New State → Repeat",
    },
    {
      title: "Unsupervised Clustering",
      content: "Raw Data → Clustering Algorithm → [Group 1, Group 2, Group 3]",
    },
    {
      title: "ML Model Building Process",
      content:
        "1. Data Acquisition → 2. Data Processing → 3. Feature Engineering → 4. Model Building",
    },
    {
      title: "Neural Network Structure",
      content: "Input Layer → Hidden Layers (with weights) → Output Layer",
    },
  ];

  const renderDashboard = () => (
    <div className="dashboard">
      <h1>AI & Machine Learning Study Guide</h1>
      <div className="dashboard-grid">
        <div className="card" onClick={() => setActiveSection("flashcards")}>
          <div className="card-icon">📚</div>
          <h3>Flashcards</h3>
          <p>Interactive learning cards for key concepts</p>
        </div>

        <div className="card" onClick={() => setActiveSection("tables")}>
          <div className="card-icon">📊</div>
          <h3>Comparison Tables</h3>
          <p>Visual comparisons of key concepts</p>
        </div>

        <div className="card" onClick={() => setActiveSection("definitions")}>
          <div className="card-icon">📖</div>
          <h3>Definitions</h3>
          <p>Important terms and explanations</p>
        </div>

        <div className="card" onClick={() => setActiveSection("examples")}>
          <div className="card-icon">💡</div>
          <h3>Examples & Analogies</h3>
          <p>Practical illustrations of concepts</p>
        </div>

        <div className="card" onClick={() => setActiveSection("diagrams")}>
          <div className="card-icon">📐</div>
          <h3>Diagrams</h3>
          <p>Visual representations of workflows</p>
        </div>

        <div className="card" onClick={() => setActiveSection("all-content")}>
          <div className="card-icon">🔍</div>
          <h3>All Content</h3>
          <p>Complete study guide in one place</p>
        </div>
      </div>
    </div>
  );

  const renderFlashcards = () => (
    <div className="section flashcards">
      <h2>Flashcards</h2>
      <div className="flashcard-container">
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

  const renderTables = () => (
    <div className="section tables">
      <h2>Comparison Tables</h2>
      {tables.map((table, index) => (
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

  const renderDefinitions = () => (
    <div className="section definitions">
      <h2>Definitions</h2>
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

  const renderExamples = () => (
    <div className="section examples">
      <h2>Examples & Analogies</h2>
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

  const renderDiagrams = () => (
    <div className="section diagrams">
      <h2>Diagrams</h2>
      <div className="diagrams-grid">
        {diagrams.map((diagram, index) => (
          <div key={index} className="diagram-card">
            <h3>{diagram.title}</h3>
            <div className="diagram-content">{diagram.content}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAllContent = () => (
    <div className="section all-content">
      <h2>Complete Study Guide</h2>
      {renderFlashcards()}
      {renderTables()}
      {renderDefinitions()}
      {renderExamples()}
      {renderDiagrams()}
    </div>
  );

  return (
    <div className="app">
      <header>
        <h1>Negm Data Analytics Study Guide</h1>
        <button
          className="home-btn"
          onClick={() => setActiveSection("dashboard")}
        >
          Home
        </button>
      </header>

      <main>
        {activeSection === "dashboard" && renderDashboard()}
        {activeSection === "flashcards" && renderFlashcards()}
        {activeSection === "tables" && renderTables()}
        {activeSection === "definitions" && renderDefinitions()}
        {activeSection === "examples" && renderExamples()}
        {activeSection === "diagrams" && renderDiagrams()}
        {activeSection === "all-content" && renderAllContent()}
      </main>

      <footer>
        <div className="nav-buttons">
          <button onClick={() => setActiveSection("dashboard")}>
            Dashboard
          </button>
          <button onClick={() => setActiveSection("flashcards")}>
            Flashcards
          </button>
          <button onClick={() => setActiveSection("tables")}>Tables</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
