import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Clubs.module.css";
import clubsImage from "../Assets/Images/Clubs.jpg";

function Clubs() {
  return (
    <div className={styles.stemPage}>
      <NavBar />
      <div className={styles.stemContainer}>
        <img
          src={clubsImage}
          alt="Divergent Clubs"
          className={styles.stemImage}
        />

        <div className={styles.textBox}>
          <h1 className={styles.headline}>Divergent Clubs</h1>
          <p className={styles.paragraph}>
            Divergent Clubs are official student-led hubs established in schools
            across Egypt, run under the umbrella of the Divergent startup. These
            clubs are the local engine behind our national initiatives — from
            spreading awareness to executing competitions and other educational
            programs
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Clubs;
