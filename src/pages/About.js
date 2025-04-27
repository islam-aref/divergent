import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/About.module.css";
import innovativeImage from "../Assets/Icons/icon-about-1.jpg";
import processImage from "../Assets/Icons/icon-about-2.jpg";
import createImage from "../Assets/Icons/icon-about-3.jpg";

function About() {
  return (
    <div className={styles.aboutPage}>
      <NavBar />

      <div className={styles.aboutHero}>
        <div className={styles.aboutContent}>
          <h1>About</h1>
          <p>
            Divergent aims to revolutionize education by promoting a culture of
            lifelong learning, innovation, and collaboration. By empowering
            students to explore their interests, develop essential skills, and
            pursue their passions, the company envisions a future where
            education transcends the confines of traditional classrooms and
            inspires a new generation of leaders, problem solvers, and
            changemakers.
          </p>
        </div>
      </div>

      <div className={styles.whatWeDo}>
        <h2 className={styles.sectionTitle}>What we do</h2>
        <p className={styles.sectionSubtitle}>Our core business</p>

        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <img
              src={innovativeImage}
              alt="innovative"
              className={styles.innovativeImage}
            />
            <h3 className={styles.stepTitle}>Innovative Learning Formats</h3>
            <p className={styles.stepDescription}>
              Divergent designs its competitions to be not only educational but
              also entertaining and engaging. By incorporating interactive
              elements, hands-on activities, and real world problem-solving
              scenarios, the company ensures that participants enjoy a holistic
              learning experience.
            </p>
          </div>

          <div className={styles.processStep}>
            <img
              src={processImage}
              alt="Process materials"
              className={styles.innovativeImage}
            />
            <h3 className={styles.stepTitle}>Mentorship and Guidance</h3>
            <p className={styles.stepDescription}>
              Divergent provides mentorship and guidance to participants
              throughout the competition process. Experienced mentors from
              relevant industries and academia offer support, feedback, and
              resources to help students maximize their potential and succeed in
              their endeavors.
            </p>
          </div>

          <div className={styles.processStep}>
            <img
              src={createImage}
              alt="Create products"
              className={styles.innovativeImage}
            />
            <h3 className={styles.stepTitle}>Diverse Competition Categories</h3>
            <p className={styles.stepDescription}>
              Divergent offers a wide range of competition categories to cater
              to the diverse interests and talents of students. These include
              but are not limited to Technology, Electronics, Science and
              General Knowledge.
            </p>
          </div>
        </div>
      </div>

      {/* New Timeline Section */}
      <div className={styles.timelineSection}>
        <h2 className={styles.sectionTitle}>Our Journey</h2>
        <div className={styles.timelineContainer}>
          {/* Timeline Item 1 */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3 className={styles.timelinePeriod}>2018-2021</h3>
              <p className={styles.timelineDescription}>
                Divergent began its journey in 2018 as a grassroots initiative
                fueled by a vision to unlock the potential of Egypt's brightest
                high school minds, particularly within the STEM school
                ecosystem. During this foundational phase, Divergent focused on
                organizing local competitions inside STEM schools, designed to
                spark creativity, critical thinking, and innovation.
              </p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3 className={styles.timelinePeriod}>2022-present</h3>
              <p className={styles.timelineDescription}>
                In 2022, Divergent transitioned from a student-led initiative to
                Egypt's first startup dedicated to designing and managing
                competitive programs for high school students. This evolution
                marked a pivotal shift — from small-scale events to
                strategically crafted programs that build the mindsets and skill
                sets necessary for future success. Divergent now focuses on
                creating mentality-building competitions, immersive educational
                events, and university-knowledge workshops, uniting high school
                and higher education. Through these programs, Divergent connects
                students with university-level thinking, resources, and
                mentorship, giving them early exposure to academic pathways and
                professional mindsets.
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3 className={styles.timelinePeriod}>Wait for it..</h3>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
