const HowItWorks = () => {
  return (
    <>
      <div className="howitworks-page">
        <div className="howitworks-hero">
          <h1>How It Works</h1>
          <p className="subtitle">Get personalized interview questions in 3 simple steps</p>
        </div>

        <div className="steps-container">
          
          <div className="step">
            <div className="step-number">01</div>
            <div className="step-content">
              <div className="step-icon">📤</div>
              <h3>Upload Your Resume</h3>
              <p>Upload your resume (PDF or Image). Our AI will analyze your skills, experience, and background.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">02</div>
            <div className="step-content">
              <div className="step-icon">🧠</div>
              <h3>AI Analysis</h3>
              <p>Advanced AI scans your resume and understands your profile, achievements, and expertise.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">03</div>
            <div className="step-content">
              <div className="step-icon">🎯</div>
              <h3>Questions Generated</h3>
              <p>Receive 10 personalized, high-quality interview questions tailored to your target role.</p>
            </div>
          </div>
        </div>

        <div className="howitworks-footer">
          <h2>Ready to prepare smarter?</h2>
          <button onClick={() => window.location.href = '/upload'} className="cta-btn">
            Upload Resume Now →
          </button>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;