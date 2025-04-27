import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Clubs.module.css";
import stemImage from "../Assets/Images/Stem.jpg";

function Stem() {
  return (
    <div className={styles.stemPage}>
      <NavBar />
      <div className={styles.stemContainer}>
        <img src={stemImage} alt="STEM Culture" className={styles.stemImage} />

        <div className={styles.textBox}>
          <h1 className={styles.headline}>STEM Culture</h1>
          <p className={styles.paragraph}>
            STEM Culture is an educational project launched in 2018 by
            Divergent, created to help ambitious students prepare for and
            successfully enter Egypt’s STEM high schools. Since its beginning,
            it has supported thousands of students by providing structured
            courses, mentorship, and guidance on their STEM journey.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Stem;
