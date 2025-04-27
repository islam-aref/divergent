import React from "react";
import styles from "./MissionVision.module.css";

const MissionVision = () => {
  return (
    <div className={styles.missionVision}>
      <div className={styles.mission}>
        <h2 className={styles.sectionTitle}>Our Mission</h2>
        <p className={styles.sectionText}>
          <strong>
            Divergent provides mentorship and guidance to participants
            throughout the competition process. Experienced mentors from
            relevant industries and academia offer support, feedback, and
            resources to help students maximize their potential and succeed in
            their endeavors.
          </strong>
        </p>
      </div>
      <div className={styles.vision}>
        <h2 className={styles.sectionTitle}>Our Vision</h2>
        <p className={styles.sectionText}>
          <strong>
            Divergent is a pioneering educational startup dedicated to
            transforming the traditional learning landscape through engaging
            competitions in various fields such as technology, electronics,
            science, and general knowledge.
          </strong>
        </p>
      </div>
    </div>
  );
};

export default MissionVision;
