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
      title: "Excellence Cup",
      description:
        "The Excellence Cup is a dynamic and intellectually challenging competition launched in 2018 by Divergent, originally held between high school students.",
      imageUrl: img1,
      learnMoreLink: "Excellence",
    },
    {
      id: 2,
      title: "STEM Culture",
      description:
        "STEM Culture is an educational project launched in 2018 by Divergent, created to help ambitious students prepare for and successfully enter Egypt’s STEM high schools",
      imageUrl: img2,
      learnMoreLink: "/Stem",
    },
    {
      id: 3,
      title: "Knowledge Planet",
      description:
        " Knowledge Planet is a yearly summit organized by Divergent, dedicated to connecting high school students with the world of higher education",
      imageUrl: img3,
      learnMoreLink: "/KP",
    },
    {
      id: 4,
      title: "Meganom",
      description:
        "Meganom is a cutting-edge AI competition created by Divergent",
      imageUrl: img4,
      learnMoreLink: "/Meganom",
    },
    {
      id: 5,
      title: "Divergent Clubs",
      description:
        " Divergent Clubs are official student-led hubs established in schools across Egypt",
      imageUrl: img5,
      learnMoreLink: "/Clubs",
    },
  ];

  return (
    <div id="splitSection" className={styles.splitScreen}>
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
    </div>
  );
};

export default SplitSection;
