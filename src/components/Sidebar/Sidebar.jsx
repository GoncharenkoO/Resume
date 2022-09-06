import photo from '../../images/photo.jpg';
import Contacts from '../Contacts';
import TechSkills from '../TechSkills';
import SoftSkills from '../SoftSkills';
import LangSkills from '../LangSkills';
import cv from '../../images/CV.pdf';
import styles from './sidebar.module.scss';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.photoBox}>
        <img src={photo} alt="Olga Goncharenko" className={styles.photo} />
        <div className={styles.nameMobileBox}>
          <h1 className={styles.nameMobile}>Olga Goncharenko</h1>
          <h5 className={styles.titleMobile}>Front-end Developer</h5>
        </div>
      </div>
      <Contacts />
      <TechSkills />
      <SoftSkills />
      <LangSkills />
      <div className={styles.section}>
        <a className={styles.link} href={cv} target="_blank" rel="noreferrer">
          Download CV
        </a>
      </div>
    </aside>
  );
}
