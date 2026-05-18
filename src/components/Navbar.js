import './components.css';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
    alert("Logged out successfully");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* Logo */}
        <Link to="/" className="logo">
          <div className="logo-icon">AI</div>
          <span>AI Interview Pro</span>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-menu desktop-menu">
          <Link to="/">Home</Link>
          <Link to="/upload">Upload Resume</Link>
          <Link to="/skills">Extracted Skills</Link>
          {/* <Link to="/questions">Generated Questions</Link> */}
          <Link to="/features">Features</Link>
        </div>

        {/* Desktop Auth Section */}
        <div className="nav-auth desktop-menu">
          {user ? (
            <div className="user-info">
              <span className="welcome-text">Hi, {user.name}</span>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
          ) : (
            <>
              <Link to="/login" className="login-btn">Login</Link>
              <Link to="/register" className="get-started-btn">Register</Link>
            </>
          )}
        </div>

        {/* Hamburger Button */}
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/upload" onClick={() => setIsMenuOpen(false)}>Upload Resume</Link>
          <Link to="/skills" onClick={() => setIsMenuOpen(false)}>Extracted Skills</Link>
          {/* <Link to="/questions" onClick={() => setIsMenuOpen(false)}>Generated Questions</Link> */}

          {user ? (
            <>
              <div className="mobile-user">Hi, {user.name}</div>
              <button onClick={handleLogout} className="logout-btn mobile-logout">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;