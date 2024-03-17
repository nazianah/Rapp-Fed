import React, { useState } from "react";
import logo from "../Assets/Icons/Logo.svg";

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
        <div>
          {" "}
          {/* Added wrapping div */}
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
              <a href="#FAQ" onClick={closeNavbar}>
                FAQs
              </a>
            </li>
          </ul>
          {isOpen && (
            <div className="left-buttons">
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
                onClick={closeNavbar}
              >
                Sign In
              </button>
              <span style={{ color: "#fff", marginTop: "2px" }}>or</span>{" "}
              {/* Added comma and fixed margin-top property */}
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  marginLeft: "10px",
                }}
                onClick={closeNavbar}
              >
                Register
              </button>
              <img
                src={Cart}
                alt="cart"
                style={{ width: "30px", cursor: "pointer", marginLeft: "10px" }}
                onClick={closeNavbar}
              />
            </div>
          )}
        </div>{" "}
        {/* Added closing div */}
        <div className="right-buttons">
          <button
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              marginRight: "10px",
            }}
            onClick={closeNavbar}
          >
            Sign In
          </button>
          <span style={{ color: "#fff" }}>or</span>
          <button
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              marginLeft: "10px",
            }}
            onClick={closeNavbar}
          >
            Register
          </button>
          <img
            src={Cart}
            alt="cart"
            style={{ width: "30px", cursor: "pointer", marginLeft: "10px" }}
            onClick={closeNavbar}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
