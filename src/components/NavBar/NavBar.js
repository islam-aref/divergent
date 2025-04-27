import React from "react";
import styles from "./NavBar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.navLinks}>
        <a href="/about" className={styles.navLink}>
          About
        </a>
        <a href="/programs" className={styles.navLink}>
          Programs
        </a>
        <a href="/gallery" className={styles.navLink}>
          Gallery
        </a>
        <a href="/contact" className={styles.navLink}>
          Contact
        </a>
      </div>
      <button className={styles.languageButton}>EN</button>
    </nav>
  );
};

export default Navbar;
