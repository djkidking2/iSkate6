import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Home from './components/Home';
import SkateParks from './components/SkateParks';
import TricksAndTutorials from './components/TricksAndTutorials';
import Community from './components/Community';
import Shop from './components/Shop';
import Profile from './components/Profile';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Display the Navbar component */}
        <Routes>
          {/* Define routes for different components */}
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/signup" element={<Signup />} /> {/* Signup route */}
          <Route path="/skateparks" element={<SkateParks />} /> {/* SkateParks route */}
          <Route path="/tricks" element={<TricksAndTutorials />} /> {/* TricksAndTutorials route */}
          <Route path="/community" element={<Community />} /> {/* Community route */}
          <Route path="/shop" element={<Shop />} /> {/* Shop route */}
          <Route path="/profile" element={<Profile />} /> {/* Profile route */}
          <Route path="/about" element={<About />} /> {/* About route */}
          {/* Add a route for the root path ("/") to redirect to the Home component */}
          <Route
            path="/"
            element={<Navigate to="/" replace />} // Redirect to the root path (Home)
          />
        </Routes>
        <Footer /> {/* Display the Footer component */}
      </div>
    </Router>
  );
}

export default App;



