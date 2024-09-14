import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './foodsmart.png'; // Adjust the path if needed
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure Bootstrap JS is imported
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#188933" fillOpacity="1" d="M0,160L30,149.3C60,139,120,117,180,138.7C240,160,300,224,360,218.7C420,213,480,139,540,101.3C600,64,660,64,720,74.7C780,85,840,107,900,133.3C960,160,1020,192,1080,197.3C1140,203,1200,181,1260,186.7C1320,192,1380,224,1410,240L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
        </svg>
        <Link to="/">
          <img src={Logo} alt="Foodsmart Logo" className="navbar-logo" />
        </Link>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/donate">Donate</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <div className="d-none d-lg-block ms-lg-3">
          <button
            className="btn custom-btn custom-border-btn"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            Member Login
          </button>
        </div>
      </nav>

      <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Member Login</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex flex-column">
          <form className="custom-form member-login-form" action="#" method="post">
            <div className="member-login-form-body">
              <div className="mb-4">
                <label className="form-label mb-2" htmlFor="member-login-number">Membership No.</label>
                <input type="text" name="member-login-number" id="member-login-number" className="form-control" placeholder="11002560" required />
              </div>
              <div className="mb-4">
                <label className="form-label mb-2" htmlFor="member-login-password">Password</label>
                <input type="password" name="member-login-password" id="member-login-password" pattern="[0-9a-zA-Z]{4,10}" className="form-control" placeholder="Password" required />
              </div>
              <div className="form-check mb-4">
                <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">Remember me</label>
              </div>
              <div className="col-lg-5 col-md-7 col-8 mx-auto">
                <button type="submit" className="form-control">Login</button>
              </div>
              <div className="text-center my-4">
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={() => alert('Forgotten password link clicked')}
                >
                  Forgotten password?
                </button>
              </div>
            </div>
          </form>
          <div className="mt-auto mb-5">
            <p><strong className="text-white me-3">Any Questions?</strong></p>
            <a href="tel:010-020-0340" className="contact-link">010-020-0340</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
