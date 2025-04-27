import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Clubs.module.css";
import ExcellenceImage from "../Assets/Images/Excellence.jpg";

function Excellence() {
  return (
    <div className={styles.stemPage}>
      <NavBar />
      <div className={styles.stemContainer}>
        <img
          src={ExcellenceImage}
          alt="Excellence Cup"
          className={styles.stemImage}
        />

        <div className={styles.textBox}>
          <h1 className={styles.headline}>Excellence Cup</h1>
          <p className={styles.paragraph}>
            The Excellence Cup is a dynamic and intellectually challenging
            competition launched in 2018 by Divergent, originally held between
            high school students. It is designed to push the boundaries of
            students' knowledge, critical thinking, and collaboration.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Excellence;
