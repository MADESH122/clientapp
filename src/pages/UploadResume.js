import { useState } from 'react';
import axios from 'axios';

const UploadResume = () => {
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState('');
  const [jobRole, setJobRole] = useState('Full Stack Developer');
  const [difficulty, setDifficulty] = useState('Medium');   // ← New
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState(null);

  const jobRoles = [
    "Full Stack Developer", "Frontend Developer", "Backend Developer",
    "Software Engineer", "Data Scientist", "Machine Learning Engineer",
    "Doctor", "Nurse", "Teacher", "Marketing Manager", "Accountant", "Other"
  ];

  const difficulties = ["Easy", "Medium", "Hard"];

  const handleDrag = (e) => {
    e.preventDefault();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  const handleUpload = async () => {
    const fileInput = document.getElementById('resume-upload');
    const file = fileInput.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('resume', file);
    formData.append('jobRole', jobRole);
    formData.append('difficulty', difficulty);   // ← Send difficulty to backend

    setUploading(true);
    setResult(null);

    try {
      const res = await axios.post('https://ai-interview-pro-server-22.onrender.com/api/questions/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setResult(res.data);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to generate questions");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="upload-page">
      <div className="upload-container">
        
        {/* Left - Upload Section */}
        <div className="upload-left">
          <h1>Upload Your Resume</h1>
          {/* <p className="subtitle">Get personalized interview questions in seconds</p> */}

          <div className="job-role-selector">
            <label>Target Job Role</label>
            <select value={jobRole} onChange={(e) => setJobRole(e.target.value)} className="role-select">
              {jobRoles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>

          {/* New Difficulty Selector */}
          <div className="job-role-selector">
            <label>Difficulty Level</label>
            <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="role-select">
              {difficulties.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>

          <div 
            className={`drop-zone ${dragActive ? 'active' : ''}`}
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={(e) => {
              e.preventDefault();
              setDragActive(false);
              const file = e.dataTransfer.files[0];
              if (file) setFileName(file.name);
            }}
            onClick={() => document.getElementById('resume-upload').click()}
          >
            <div className="upload-icon">📄</div>
            <h3>Drag & Drop your resume here</h3>
            <p>PNG, JPG, PDF up to 10MB</p>

            <input 
              type="file" 
              id="resume-upload" 
              accept="image/*,.pdf" 
              className="hidden" 
              onChange={handleFileSelect}
            />

            {fileName && <p className="selected-file">✅ {fileName}</p>}
          </div>

          {fileName && (
            <button className="generate-btn" onClick={handleUpload} disabled={uploading}>
              {uploading ? "AI is Thinking..." : "Generate Interview Questions"}
            </button>
          )}
        </div>

        {/* Right - Questions Section */}
        <div className="questions-right">
          <div className="questions-header">
            <h2>Generated Questions</h2>
            <p>Based on your resume</p>
          </div>

          {result && result.success ? (
            <div className="questions-result">
              <p className="role-info"><strong>Role:</strong> {result.jobRole} • <strong>Level:</strong> {difficulty}</p>
              
              <div className="questions-list">
                {Array.isArray(result.questions) ? (
                  result.questions.map((q, index) => (
                    <div key={index} className="question-item">
                      <span className="number">{index + 1}</span>
                      <p>{q}</p>
                    </div>
                  ))
                ) : (
                  <p>No questions available.</p>
                )}
              </div>
            </div>
          ) : (
            <div className="empty-state">
              <p>✨Upload your resume and select job role + difficulty to generate questions</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadResume;