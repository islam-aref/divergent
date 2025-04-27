import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.hero}>
        <div className={styles.heroImage}></div>

        <div className={styles.contentBox}>
          <div className={styles.textContent}>
            <h2 className={styles.heroHeadline}>
              Inspiring a new generation of leaders, problem solvers, and
              changemakers
            </h2>
            <p className={styles.heroSubscript}>
              Divergent is a pioneering educational startup dedicated to
              transforming
              <br />
              the traditional learning landscape through engaging competitions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
