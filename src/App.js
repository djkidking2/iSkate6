import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Navbar from './components/Navbar';
import Signup from './components/Signup'; // Import your Signup component


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
      <Navbar />
        {/* Use <Routes> to define your routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} /> {/* Set the path for your Signup component */}
          <Route path="/skateparks" element={<SkateParks />} />
          <Route path="/tricks" element={<TricksAndTutorials />} />
          <Route path="/community" element={<Community />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


