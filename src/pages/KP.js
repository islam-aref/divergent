import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Clubs.module.css";
import KPImage from "../Assets/Images/KP.jpg";

function KP() {
  return (
    <div className={styles.stemPage}>
      <NavBar />
      <div className={styles.stemContainer}>
        <img src={KPImage} alt="KP Education" className={styles.stemImage} />

        <div className={styles.textBox}>
          <h1 className={styles.headline}>KP Education</h1>
          <p className={styles.paragraph}>
            Knowledge Planet is a yearly summit organized by Divergent,
            dedicated to connecting high school students with the world of
            higher education. Since its launch, the summit has become a hub
            where students explore academic paths, meet universities, and engage
            with real-world opportunities.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default KP;
