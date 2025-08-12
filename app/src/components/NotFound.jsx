import { FaArrowLeft, FaTools } from "react-icons/fa";
// import { FaCogs } from "react-icons/fa";
import "../notfound.css";

const NotFound = ({ lectureTitle, category, onBack }) => {
  const displayCategory = category === "allContent" ? "All Content" : category;

  return (
    <div className="not-found-container">
      <div className="nf-card-container">
        <div className="nf-icon floating">
          <FaTools />
        </div>

        <h1 className="nf-title">Working on it</h1>
        <p className="nf-subtitle">
          {displayCategory} category is either not useful to be implemented here
          or will be implemented later in {lectureTitle}.
        </p>

        <div className="nf-actions">
          <button className="nf-button nf-button-primary" onClick={onBack}>
            <FaArrowLeft /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
