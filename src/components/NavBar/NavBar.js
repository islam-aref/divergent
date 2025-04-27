import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logoImage from "./logo.png";

// Replace these imports:
// import { FaBars, FaTimes } from "react-icons/fa";

// With inline SVGs:
const BarsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

const TimesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
  </svg>
);

const NavBar = () => {
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isMouseOverDropdown, setIsMouseOverDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  let timeoutId;

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsProgramsOpen(false);
  };

  // Handle mouse enter (desktop)
  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      clearTimeout(timeoutId);
      setIsProgramsOpen(true);
      setIsMouseOverDropdown(false);
    }
  };

  // Handle mouse leave with delay (desktop)
  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      timeoutId = setTimeout(() => {
        if (!isMouseOverDropdown) {
          setIsProgramsOpen(false);
        }
      }, 2500);
    }
  };

  // Handle dropdown mouse enter (desktop)
  const handleDropdownEnter = () => {
    if (window.innerWidth > 768) {
      clearTimeout(timeoutId);
      setIsMouseOverDropdown(true);
    }
  };

  // Handle dropdown mouse leave (desktop)
  const handleDropdownLeave = () => {
    if (window.innerWidth > 768) {
      setIsMouseOverDropdown(false);
      setIsProgramsOpen(false);
    }
  };

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsProgramsOpen(false);
  };

  // Programs dropdown items
  const programItems = [
    { path: "/excellence", name: "Excellence Cup" },
    { path: "/stem", name: "STEM Culture" },
    { path: "/kp", name: "KP Education" },
    { path: "/meganom", name: "Meganom" },
    { path: "/clubs", name: "Divergent Clubs" },
  ];

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Link to="/" onClick={closeMobileMenu}>
            <img
              src={logoImage}
              alt="Divergent Logo"
              className={styles.logoImage}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          <Link
            to="/about"
            className={styles.navLink}
            onClick={closeMobileMenu}
          >
            About
          </Link>

          <div
            className={styles.navItem}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className={styles.navLink}>Programs</span>
            {isProgramsOpen && (
              <div
                className={styles.dropdown}
                ref={dropdownRef}
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                {programItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={styles.dropdownItem}
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/gallery"
            className={styles.navLink}
            onClick={closeMobileMenu}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className={styles.navLink}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <TimesIcon /> : <BarsIcon />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`${styles.mobileNav} ${
            isMobileMenuOpen ? styles.open : ""
          }`}
        >
          <Link
            to="/about"
            className={styles.mobileNavLink}
            onClick={closeMobileMenu}
          >
            About
          </Link>

          <div className={styles.mobilePrograms}>
            <span
              className={styles.mobileNavLink}
              onClick={() => setIsProgramsOpen(!isProgramsOpen)}
            >
              Programs
            </span>
            {isProgramsOpen && (
              <div className={styles.mobileDropdown}>
                {programItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={styles.mobileDropdownItem}
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/gallery"
            className={styles.mobileNavLink}
            onClick={closeMobileMenu}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className={styles.mobileNavLink}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </div>

        {/* Language Selector */}
        <div className={styles.languageSelector}>
          <span className={styles.languageText}>EN</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
