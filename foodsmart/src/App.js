import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Pages/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Pages/Home';
import Blog from './Components/Pages/Blog';
import Contact from './Components/Pages/Contact';
import Donate from './Components/Pages/Donate';
import Membership from './Components/Pages/Membership'; // Import the Membership component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/membership" element={<Membership />} /> {/* Define the route for Membership */}
          <Route path="*" element={<Home />} /> {/* Fallback Route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
