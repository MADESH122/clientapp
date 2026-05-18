const Features = () => {
  return (
    <>
      <div className="features-page">
        <div className="features-hero">
          <h1>Powerful Features</h1>
          <p className="subtitle">Everything you need to prepare for your dream job</p>
        </div>

        <div className="features-grid">
          
          <div className="feature-card">
            <div className="feature-icon">📄</div>
            <h3>Smart Resume Analysis</h3>
            <p>Our AI reads your resume and understands your skills, experience, and achievements instantly.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Personalized Questions</h3>
            <p>Get 10 high-quality, role-specific interview questions tailored to your background.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Difficulty Levels</h3>
            <p>Questions categorized into Easy, Medium & Hard levels for complete preparation.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Instant Results</h3>
            <p>Upload once and get AI-generated questions in seconds. No waiting time.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Multiple Roles</h3>
            <p>Switch between different job roles and get fresh questions every time.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Fully Responsive</h3>
            <p>Access from any device — desktop, tablet, or mobile with seamless experience.</p>
          </div>
        </div>

        <div className="features-cta">
          <h2>Ready to ace your next interview?</h2>
          <button onClick={() => window.location.href = '/upload'} className="cta-button">
            Start Now - It's Free
          </button>
        </div>
      </div>
    </>
  );
};

export default Features;