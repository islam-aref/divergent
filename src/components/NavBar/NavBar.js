import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logoImage from "./logo.png"; // Update with your logo path

const NavBar = () => {
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isMouseOverDropdown, setIsMouseOverDropdown] = useState(false);
  const dropdownRef = useRef(null);
  let timeoutId;

  // Handle mouse enter
  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsProgramsOpen(true);
    setIsMouseOverDropdown(false);
  };

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      if (!isMouseOverDropdown) {
        setIsProgramsOpen(false);
      }
    }, 2500); // 2 second delay
  };

  // Handle dropdown mouse enter
  const handleDropdownEnter = () => {
    clearTimeout(timeoutId);
    setIsMouseOverDropdown(true);
  };

  // Handle dropdown mouse leave
  const handleDropdownLeave = () => {
    setIsMouseOverDropdown(false);
    setIsProgramsOpen(false);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Programs dropdown items
  const programItems = [
    { path: "/excellence", name: "Excellence Cup" },
    { path: "/stem", name: "STEM Culture" },
    { path: "/kp", name: "KP Education" },
    { path: "/meganom", name: "Meganom" },
    { path: "/clubs", name: "Divergent Clubs" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Link to="/">
            <img
              src={logoImage}
              alt="Divergent Logo"
              className={styles.logoImage}
            />
          </Link>
        </div>

        <div className={styles.navLinks}>
          <Link to="/about" className={styles.navLink}>
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
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/gallery" className={styles.navLink}>
            Gallery
          </Link>
          <Link to="/contact" className={styles.navLink}>
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
