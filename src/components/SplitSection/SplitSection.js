import React from "react";
import styles from "./SplitSection.module.css";

// Import images directly
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";

const SplitSection = () => {
  const sections = [
    {
      id: 1,
      title: "Innovative Learning",
      description:
        "Our platform revolutionizes education through cutting-edge technology and interactive content designed for modern learners.",
      imageUrl: img1,
      learnMoreLink: "/innovative-learning",
    },
    {
      id: 2,
      title: "Global Community",
      description:
        "Join a network of 370K+ active users collaborating across borders to share knowledge and opportunities.",
      imageUrl: img2,
      learnMoreLink: "/global-community",
    },
    {
      id: 3,
      title: "Institutional Partnerships",
      description:
        "We collaborate with 210+ prestigious institutions to deliver world-class educational experiences.",
      imageUrl: img3,
      learnMoreLink: "/partnerships",
    },
    {
      id: 4,
      title: "Career Pathways",
      description:
        "500+ success stories of students placed in top internships and jobs through our career services.",
      imageUrl: img4,
      learnMoreLink: "/careers",
    },
    {
      id: 5,
      title: "Personalized Support",
      description:
        "Tailored guidance and mentorship to help each learner achieve their unique educational goals.",
      imageUrl: img5,
      learnMoreLink: "/support",
    },
  ];

  return (
    <div className={styles.splitSectionContainer}>
      {sections.map((section) => (
        <div key={section.id} className={styles.splitSection}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <p className={styles.sectionDescription}>{section.description}</p>
            <a href={section.learnMoreLink} className={styles.learnMoreLink}>
              Learn More →
            </a>
          </div>
          <div className={styles.imageContainer}>
            <img
              src={section.imageUrl}
              alt={section.title}
              className={styles.sectionImage}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SplitSection;
