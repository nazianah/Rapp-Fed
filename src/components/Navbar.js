import React, { useState } from "react";
import logo from "../Assets/Icons/Logo.svg";
import "./Navbar.css";
import menuIcon from "../Assets/Icons/menu.svg";
import closeIcon from "../Assets/Icons/close.svg";
import Cart from "../Assets/Icons/Cart-icon.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="nav-container">
        <img src={logo} alt="logo" className="logo" />
        <div className="menu-icon" onClick={toggleNavbar}>
          <img
            src={isOpen ? closeIcon : menuIcon}
            alt={isOpen ? "Close" : "Menu"}
            className="menu"
          />
        </div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <a href="#smart-sleep-coach" onClick={closeNavbar}>
              SMART SLEEP COACH
            </a>
          </li>
          <li>
            <a href="#upgrade-to-pro" onClick={closeNavbar}>
              UPGRADE TO PRO
            </a>
          </li>
          <li>
            <a href="#sleep-plans" onClick={closeNavbar}>
              SLEEP PLANS
            </a>
          </li>
          <li>
            <a href="#reviews" onClick={closeNavbar}>
              REVIEWS
            </a>
          </li>
          <li>
            <a href="#faqs" onClick={closeNavbar}>
              FAQs
            </a>
          </li>
          <li className="right-buttons">
            <button className="button" onClick={closeNavbar}>Sign In</button>
            <span> or </span>
            <button className="button" onClick={closeNavbar}>Register</button>
            <img src={Cart} alt="cart" className="cart" onClick={closeNavbar} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
