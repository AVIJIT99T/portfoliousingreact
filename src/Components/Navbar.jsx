import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar_main">
        <div className="container-fluid">
          <h1 className="navbar-brand nav_heading">
            Portfo<span className="heading_span">lio</span>
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto navbar-ul">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link active" to="/skills">
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/projects">
                  Project
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
