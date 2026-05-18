import { useState } from 'react';
import './pages.css';

const ExtractedSkills = () => {
  const [skills] = useState([
    "Python", "Machine Learning", "Deep Learning", "NLP", "SQL",
    "Data Analysis", "Pandas", "NumPy", "Scikit-learn", "TensorFlow",
    "PyTorch", "React", "JavaScript", "Git", "REST API", "Problem Solving", "OOPs"
  ]);

  return (
    <div className="skills-page">
      <div className="skills-container">
        <div className="skills-header">
          <div className="success-badge">✅ Successfully Extracted</div>
          <h1>Extracted Skills</h1>
          <p>These skills were detected from your resume and will be used to generate personalized questions.</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-tag">
              <span className="check">✓</span>
              {skill}
            </div>
          ))}
        </div>

        <button className="generate-questions-btn">
          Generate Personalized Questions →
        </button>
      </div>
    </div>
  );
};

export default ExtractedSkills;