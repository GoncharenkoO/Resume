import Projects from '../ProjectsBlock/Projects';
import WorkExperience from '../WorkExperience';
import Education from '../Education/EducationBlock';
import styles from './aboutMe.module.scss';

export default function AboutMe() {
  return (
    <div className={styles.containerAboutMe}>
      <div className={styles.aboutMeSection}>
        <h2 className={styles.smallTitle}>Front-end Developer</h2>
        <h1 className={styles.name}>Olga Goncharenko</h1>
        <p className={styles.desc}>
          I'm a Front-end developer and I'm looking for an interesting job as a
          junior developer for experience and training. I want be in a good team
          to improve my skills and use them for interesting tasks. Ready to
          learn and grow!
        </p>
      </div>
      <Projects />
      <WorkExperience />
      <Education />
    </div>
  );
}
