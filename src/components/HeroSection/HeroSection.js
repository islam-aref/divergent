import React, { useState, useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const scrollY = window.scrollY;
      const maxScroll = container.offsetHeight - window.innerHeight;
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.scrollContainer} ref={scrollContainerRef}>
      <div className={styles.hero}>
        {/* Hero Image */}
        <div
          className={styles.heroImage}
          style={{
            width: `${100 - scrollProgress * 75}%`,
            transform: `translateY(${scrollProgress * 20}px)`,
            filter: `brightness(${1 - scrollProgress * 0.5})`,
          }}
        >
          <h1
            className={styles.companyName}
            style={{
              opacity: 1 - scrollProgress * 1.5,
              transform: `translateY(${-scrollProgress * 50}px)`,
            }}
          >
            ENVIROFLIGHT
          </h1>
        </div>

        {/* Content Box */}
        <div
          className={`${styles.contentBox} ${
            scrollProgress > 0 ? styles.visible : styles.hidden
          }`}
          style={{
            opacity: scrollProgress,
            width: `${scrollProgress * 75}%`,
          }}
        >
          <div className={styles.textContent}>
            <h2 className={styles.heroHeadline}>
              Changing the world, one
              <br />
              sustainable ingredient at a time
            </h2>
            <p className={styles.heroSubscript}>
              EnviroFlight produces all-natural, locally sourced black soldier
              fly larvae (BSFL) feed ingredients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
