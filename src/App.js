import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import UploadResume from './pages/UploadResume';
import ExtractedSkills from './pages/ExtractedSkills';
import HowItWorks from './pages/HowItworks';
import Features from './pages/Features';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/features" element={<Features />} />
        {/* Protected Routes */}
        <Route 
          path="/upload" 
          element={
            <PrivateRoute>
              <UploadResume />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/skills" 
          element={
            <PrivateRoute>
              <ExtractedSkills />
            </PrivateRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;