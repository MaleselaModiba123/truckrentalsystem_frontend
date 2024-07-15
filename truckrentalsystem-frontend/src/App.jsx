import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import Renttrucks from './Components/Renttrucks';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Profile from './Components/Profile';
import Branches from './Components/Branches';
import GetQuote from './Components/GetQuote';
import logo from '/public/logo.jpeg'; // Update the path to your logo image
import './App.css';

function App() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <Router>
      <div className={`App ${!visible ? 'hidden' : ''}`}>
        <nav className={`navbar ${!visible ? 'hidden' : ''}`}>
          <img src={logo} alt="logo" className="logo" />
          <div className="nav-buttons">
          <Link to="/" className="nav-button">Home</Link>
          <Link to="/rent-trucks" className="nav-button">Rent Trucks</Link>
          <Branches /> {/* Render Branches dropdown */}
          <Link to="/about-us" className="nav-button">About Us</Link>
          <Link to="/contact-us" className="nav-button">Contact Us</Link>
          <Link to="/profile" className="nav-button">Profile</Link>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/rent-trucks" element={<Renttrucks />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/get-quote/:truckId" element={<GetQuote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
