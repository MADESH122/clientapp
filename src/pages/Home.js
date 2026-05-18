import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-container">
          
          {/* Centered Hero Content */}
          <div className="hero-text text-center mx-auto max-w-4xl px-4">
            
            <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-6 py-2.5 rounded-full text-sm font-medium mb-8">
              ⭐ AI-Powered Platform
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
              AI-Powered Interview Question<br />
              <span className="highlight">Generator</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mt-8 max-w-2xl mx-auto">
              Upload your resume and get personalized interview questions based on your skills and experience.
            </p>

            <div className="btn-group mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="btn-primary text-lg px-10 py-4"
                onClick={() => window.location.href = '/upload'}
              >
                Upload Resume
              </button>
              <Link to="/features">
                <button className="btn-secondary text-lg px-10 py-4">How It Works</button>
              </Link>
            </div>

            {/* Stats */}
            <div className="stats mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="stat-card">
                <h3>10K+</h3>
                <p>Users</p>
              </div>
              <div className="stat-card">
                <h3>50K+</h3>
                <p>Questions Generated</p>
              </div>
              <div className="stat-card">
                <h3>95%</h3>
                <p>Accuracy</p>
              </div>
              <div className="stat-card">
                <h3>20+</h3>
                <p>Skills Supported</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Features Section Added Under Home */}
      <div className="features-section">
        <h2>Why Choose AI Interview Pro?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">📄</div>
            <h3>Smart Resume Analysis</h3>
            <p>AI reads your resume and understands your unique skills and experience.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎯</div>
            <h3>Personalized Questions</h3>
            <p>Get questions tailored to your target job role and experience level.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <h3>Instant Results</h3>
            <p>Upload once and receive questions in seconds.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📊</div>
            <h3>Multiple Difficulty Levels</h3>
            <p>Choose Easy, Medium, or Hard questions based on your preparation needs.</p>
          </div>
        </div>

      {/* Popular Categories */}
      <div className="categories">
        <h2>Popular Categories</h2>
        <div className="category-grid">
          {["Technical Interview", "HR Round", "Aptitude Round", "Coding Challenge", "Non-Technical Interview", "Skill-Based Interview"].map((item, i) => (
            <div key={i} className="category-card">
              <p className="font-medium text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
        <div className="features">
          <Link to="/features">
            <button className="explore-btn">Explore All Features →</button>
          </Link>
        </div>
      </div>

    </>
  );
};

export default Home;