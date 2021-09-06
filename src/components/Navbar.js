import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRAVEL <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
