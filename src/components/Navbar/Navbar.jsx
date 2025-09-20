import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top glass-navbar shadow-sm ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="logo.png" alt="OpenMarket" className="logo-img" />
          <span className="brand-text">OpenMarket</span>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center text-lg-start">
            <li className="nav-item">
              <Link className="nav-link neon-link px-3" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle neon-link px-3"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Categories
              </Link>
              <ul className="dropdown-menu glass-dropdown shadow">
                <li><Link className="dropdown-item" to="/category/barber">Barber</Link></li>
                <li><Link className="dropdown-item" to="/category/lawyer">Lawyer</Link></li>
                <li><Link className="dropdown-item" to="/category/carpenter">Carpenter</Link></li>
                <li><Link className="dropdown-item" to="/category/plumber">Plumber</Link></li>
                <li><Link className="dropdown-item" to="/category/electrician">Electrician</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link neon-link px-3" to="/top-professionals">Top Professionals</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link neon-link px-3" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link neon-link px-3" to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="d-flex flex-column flex-lg-row align-items-center mt-3 mt-lg-0 gap-2 ms-lg-3 text-center">
            <Link className="neon-btn-outline w-100 w-lg-auto" to="/login">Login</Link>
            <Link className="neon-btn w-100 w-lg-auto" to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
