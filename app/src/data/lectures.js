import Lecture from "../models/Lecture";

export const lectures = [
  new Lecture(
    1,
    "Lecture 1: Introduction to AI & ML",
    "Fundamental concepts, automation vs autonomy, and ML applications",
    {
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
    }
  ),
  new Lecture(
    2,
    "Lecture 2: Types of Machine Learning",
    "Supervised, unsupervised, reinforcement learning, and model building",
    {
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
          content: "Input Layer → Hidden Layers (with weights) → Output Layer",
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
            "Supervised: Uses labeled data, predictive models",
            "Unsupervised: Finds hidden patterns in unlabeled data",
            "Reinforcement: Learns through interaction with environment",
          ],
        },
        {
          title: "Practical Applications",
          content: [
            "Supervised: Image recognition, spam detection",
            "Unsupervised: Market segmentation, anomaly detection",
            "Reinforcement: Game AI, robotics, autonomous systems",
          ],
        },
      ],
    }
  ),
  new Lecture(
    3,
    "Lecture 3: Introduction to Python",
    "Python Fundementals 1, Interactive Interpreter, Variables, Data Types, Data Structures, Console I/O and Control Flow, Loops and Functions",
    {
      flashcards: [
        {
          front: "results + greetings = ?",
          back: "You have won 100 dollars! Congratulations,",
        },
        {
          front: "2 + results[-12] = ?",
          back: "3",
        },
        {
          front: "greetings[19] = ?",
          back: "Error: Index out of range",
        },
        {
          front: "greetings[::-1] = ?",
          back: ",snoitalutargnoC",
        },
      ],
      tables: [
        {
          title: "Python Data Types Cheat Sheet",
          headers: ["Data Type", "Example", "Description"],
          rows: [
            ["int", "5, -3, 1000", "Whole numbers without decimals"],
            ["float", "3.14, -0.001, 2.0", "Numbers with decimal points"],
            ["str", "'hello', \"Python\"", "Text sequences (immutable)"],
            ["bool", "True, False", "Boolean truth values"],
            ["list", "[1, 2, 'a']", "Ordered, mutable collection"],
            ["tuple", "(1, 2, 'a')", "Ordered, immutable collection"],
            ["dict", "{'name': 'Alice', 'age': 30}", "Key-value pairs"],
            ["set", "{1, 2, 3}", "Unordered, unique elements"],
          ],
        },
        {
          title: "String Slicing Examples",
          headers: ["Example", "Result", "Explanation"],
          rows: [
            ["s = 'Python'", "", ""],
            ["s[0]", "'P'", "First character"],
            ["s[-1]", "'n'", "Last character"],
            ["s[2:4]", "'th'", "Characters 2-3"],
            ["s[:3]", "'Pyt'", "First 3 characters"],
            ["s[3:]", "'hon'", "From index 3 to end"],
            ["s[::2]", "'Pto'", "Every 2nd character"],
            ["s[::-1]", "'nohtyP'", "Reversed string"],
          ],
        },
      ],
      definitions: [
        {
          term: "Interactive Interpreter",
          definition:
            "Python shell that executes code line-by-line immediately (REPL - Read-Eval-Print Loop)",
        },
        {
          term: "Variable",
          definition:
            "Named container that stores data values (dynamically typed)",
        },
        {
          term: "Data Type",
          definition:
            "Classification of data that determines possible values and operations",
        },
        {
          term: "List",
          definition:
            "Mutable, ordered collection of items (can contain mixed types)",
        },
        {
          term: "Tuple",
          definition:
            "Immutable, ordered collection of items (cannot be changed after creation)",
        },
        {
          term: "Control Flow",
          definition:
            "Order in which statements are executed (if/else, loops, etc.)",
        },
        {
          term: "Function",
          definition: "Reusable block of code that performs a specific task",
        },
      ],
      examples: [
        {
          title: "Basic Console I/O",
          content: `# Input and output examples
name = input("Enter your name: ")
print(f"Hello, {name}!")
age = int(input("Enter your age: "))
print(f"Next year you'll be {age + 1} years old.")`,
        },
        {
          title: "Control Flow with if/else",
          content: `# Grade classification
score = 85

if score >= 90:
    grade = 'A'
elif score >= 80:
    grade = 'B'
elif score >= 70:
    grade = 'C'
else:
    grade = 'F'
    
print(f"Your grade: {grade}")`,
        },
        {
          title: "Loop Examples",
          content: `# For loop with range
print("Countdown:")
for i in range(5, 0, -1):
    print(i)
print("Blastoff!")

# While loop
password = ""
while password != "secret":
    password = input("Enter password: ")
print("Access granted!")

# List iteration
fruits = ["apple", "banana", "cherry"]
print("My favorite fruits:")
for fruit in fruits:
    print(f"- {fruit}")`,
        },
        {
          title: "Function Definition",
          content: `# Function to calculate area
def calculate_area(shape, *args):
    if shape == "circle":
        radius = args[0]
        return 3.14 * radius ** 2
    elif shape == "rectangle":
        length, width = args
        return length * width
    else:
        return "Unsupported shape"

# Using the function
circle_area = calculate_area("circle", 5)
rect_area = calculate_area("rectangle", 4, 7)
print(f"Circle area: {circle_area}")
print(f"Rectangle area: {rect_area}")`,
        },
      ],
      diagrams: [
        {
          title: "Start Indexing",
          content: "StartIndexing.png",
        },
        {
          title: "Control Flow Diagram",
          content: "ControlFlow.png",
        },
        {
          title: "Loop Excution Flow",
          content: "Loop.png",
        },
        {
          title: "Test",
          content: "Testing\nMe",
        },
      ],
      allContent: [
        {
          title: "What is an Interactive Interpreter",
          content: [
            "It lets you write one line of code at a time and see the result instantly.",
            "Sandbox environment for testing code snippets",
          ],
        },
        {
          title: "Comments",
          content: [
            "Single-line comments start with #",
            "Multi-line comments use triple quotes (''')",
          ],
        },
        {
          title: "Variables",
          content: [
            "Variables store data values",
            "No need to declare type explicitly; variables in python are dynamically-typed",
            "Example: x = 5 (x is an integer variable)",
          ],
        },
        {
          title: "Variables types",
          content: [
            "type() function returns the type of a variable",
            "Common types: int, float, str, bool",
            "type(5) returns <class 'int'>",
            "type(3.14) returns <class 'float'>",
            "type('Hello') returns <class 'str'>",
            "type(type(int)) returns <class 'type'>",
          ],
        },
        {
          title: "Numbers",
          content: [
            "Python has two numeric types: int (integers) and float (floating-point numbers)",
            "3 -> int, 3.14 -> float",
            "1 + 1 returns 2 (int)",
            "10 * 2 returns 20 (int)",
            "9 / 3 returns 3.0 (float)",
            "7 // 3 returns 2 (integer division)",
            "7 % 3 returns 1 (modulus)",
            "2 ** 3 returns 8 (exponentiation)",
          ],
        },
        {
          title: "Booleans",
          content: [
            "Booleans represent True or False values",
            "Not True -> False",
            "Not False -> True",
            "True and False -> False",
            "1 == 1 returns True",
            "1 != 2 returns True",
            "1 < 2 returns True",
            "1 < 2 < 3 returns True (chained comparison)",
          ],
        },
        {
          title: "Strings",
          content: [
            "No char type in Python, single characters are strings. ' and \" create strings literals",
            "greeting = 'Hello'",
            'group = "World"',
            "greeting + ' ' + group -> 'Hello World'",
            "Indexing: assume string s = 'Arthur'",
            "s[0] -> 'A' (first character)",
            "s[-2] -> 'u' (negative index for second last character)",
            "s[1:4] -> 'rth' (substring from index 1 to 3)",
            "s[:3] -> 'Art' (substring from start to index 2)",
            "s[6] -> IndexError (index out of range)",
            "s[1:5:2] -> 'au' (step of 2)",
            "s[::-1] -> 'ruhtA' (reverse string)",
          ],
        },
      ],
    }
  ),
  new Lecture(
    4,
    "Lecture 4: Introduction to Data Science",
    "Data Visualization",
    {
      flashcards: [
        {
          front: "80% of world's data is?",
          back: "Unstructured data",
        },
        {
          front: "What are the 5 Vs of Big Data?",
          back: "Volume, Variety, Velocity, Veracity, Value",
        },
        {
          front: "What is a cloud database?",
          back: "A database hosted on a cloud computing platform, accessible over the internet. Zay AWS, Azure, Google Cloud.",
        },
        {
          front: "What is Data Visualization?",
          back: "It is a graphical representation of data. Can be achieved with graphs, charts, and maps.",
        },
        {
          front: "Visualization vs Statistics",
          back: "Data visualization provides a more informative view of data, while statistics focuses on numerical analysis.",
        },
        {
          front:
            "What is the Data visualization library that is used to create static and interactive visualizations in Python?",
          back: "Matplotlib",
        },
        {
          front:
            "What is the data visualization library that is based on Matplotlib and provides a high-level interface for drawing attractive statistical graphics?",
          back: "Seaborn",
        },
      ],
      tables: [
        {
          title: "5 Vs of Big Data",
          headers: ["V", "Description"],
          rows: [
            ["Volume", "Amount of data generated and stored"],
            ["Variety", "Different types of data (structured, unstructured)"],
            ["Velocity", "Speed at which data is generated and processed"],
            ["Veracity", "Trustworthiness and quality of data"],
            ["Value", "Importance and usefulness of data"],
          ],
        },
        {
          title: "Visualization vs Statistics",
          headers: ["Aspect", "Visualization", "Statistics"],
          rows: [
            [
              "Purpose",
              "Graphical representation of data",
              "Numerical analysis",
            ],
            [
              "Focuses on",
              "Patterns and trends",
              "Data distribution and relationships",
            ],
            ["Tools", "Graphs, charts, maps", "Statistical tests, models"],
          ],
        },
        {
          title: "Data Types",
          headers: ["Type", "Description", "Example"],
          rows: [
            ["Nominal", "Categorical data without order", "Colors, names"],
            [
              "Ordinal",
              "Categorical data with order",
              "Ratings (low, medium, high)",
            ],
            [
              "Interval",
              "Numerical data with equal intervals (0 is not the lowest point)",
              "Temperature in Celsius",
            ],
            [
              "Ratio",
              "Numerical data with a true zero point (0 is the absolute lowest value)",
              "Height, weight",
            ],
          ],
        },
        {
          title: "Data Quality Dimensions",
          headers: ["Dimension", "Description"],
          rows: [
            ["Accuracy", "Correctness of data"],
            ["Completeness", "Extent to which data is complete"],
            ["Consistency", "Uniformity of data across datasets"],
            ["Timeliness", "Relevance of data to current time"],
            ["Validity", "Data conforms to defined rules or formats"],
            ["Currency", "Data is up-to-date"],
            ["Integrity", "Data is reliable and trustworthy"],
          ],
        },
        {
          title: "Multi-Dimentional Data",
          headers: ["Dimension", "Example"],
          rows: [
            ["1-Dimensional", "Bar charts, Pie charts"],
            [
              "2-Dimensional",
              "Scatter plots, Heatmaps, line plots, histograms, Box plots",
            ],
            ["3-Dimensional", "3D scatter plots, Surface plots"],
          ],
        },
      ],
      definitions: [
        {
          term: "Data Visualization",
          definition:
            "The graphical representation of data to help understand patterns, trends, and insights.",
        },
        {
          term: "Data Trend",
          definition:
            "A pattern or tendency in data over time, showing how values change.",
        },
      ],
      examples: [
        {
          title: "Bar Chart Example",
          content: `# Bar chart example using Matplotlib
                  import matplotlib.pyplot as plt
                  data = [10, 20, 15, 25]
                  labels = ['A', 'B', 'C', 'D']
                  plt.bar(labels, data)
                  plt.xlabel('Categories')
                  plt.ylabel('Values')
                  plt.title('Bar Chart Example')
                  plt.show()`,
        },
        {
          title: "Data Trend Example",
          content: "DataTrendExample.png",
        },
        {
          title: "1-Dimentional Data Bar Chart",
          content: "BarChart.png",
        },
        {
          title: "1-Dimentional Data Pie Chart",
          content: "PieChart.png",
        },
        {
          title: "2-Dimentional Line Plot",
          content: "LinePlot.png",
        },
        {
          title: "2-Dimentional Scatter Plot",
          content: "ScatterPlot.png",
        },
        {
          title: "2-Dimentional Heatmap matrix",
          content: "HeatMap.png",
        },
        {
          title: "2-Dimentional Histogram",
          content: "Histogram.png",
        },
        {
          title: "2-Dimentional Box Plot",
          content: "BoxPlot.png",
        },
        {
          title: "3-Dimentional Scatter Plot",
          content: "TDScatterPlot.png",
        },
        {
          title: "Data Visualization libraries",
          content:
            "Numpy, Matplotlib, pytest, pandas, PyPy, Scikit-learn, Jupyter, Seaborn, Bokeh, xtensor, caterva",
        },
      ],
      diagrams: [
        {
          title: "The 5 Vs",
          content: "FiveVs.png",
        },
        {
          title: "Python Data Types",
          content: "PythonDataTypes.png",
        },
        {
          title: "Visualization vs Statistics",
          content: "VisualizationStatistics.png",
        },
      ],
    }
  ),
];
