import React from "react";
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
                <a
                  className="nav-link active"
                  // className="menu_active"
                  aria-current="page"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  // className="menu_active"
                  href="#about"
                >
                  About
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active"
                  // className="menu_active"
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  // className="menu_active"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  // className="menu_active"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
