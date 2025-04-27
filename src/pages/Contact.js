import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Contact.module.css";

function Contact() {
  return (
    <div className={styles.contactPage}>
      <NavBar />
      <div className={styles.contactContainer}>
        <div className={styles.contactCard}>
          <div>
            <h3>Address</h3>
            <p>LOL____________________________________________________.</p>
          </div>
        </div>

        <div className={styles.contactCard}>
          <div>
            <h3>Phone</h3>
            <p>+2023456789</p>
          </div>
        </div>

        <div className={styles.contactCard}>
          <div>
            <h3>Email</h3>
            <p>info@dive</p>
          </div>
        </div>

        <div className={styles.contactCard}>
          <div>
            <h3>Working Hours</h3>
            <p>From 10 AM to 5 PM</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
