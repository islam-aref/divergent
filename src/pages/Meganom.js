import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Clubs.module.css";
import MeganomImage from "../Assets/Images/Meganom.jpg";

function Meganom() {
  return (
    <div className={styles.stemPage}>
      <NavBar />
      <div className={styles.stemContainer}>
        <img src={MeganomImage} alt="Meganom" className={styles.stemImage} />

        <div className={styles.textBox}>
          <h1 className={styles.headline}>Meganom</h1>
          <p className={styles.paragraph}>
            Meganom is a cutting-edge AI competition created by Divergent, where
            high school students from across Egypt compete to showcase their
            skills in artificial intelligence, logic, and real-world problem
            solving.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Meganom;
