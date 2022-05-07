import styles from './softSkillsBlock.module.scss';

export default function SoftSkillsBlock({ label }) {
  return (
    <li className={styles.softSkillsBlock}>
      <p className={styles.softSkills}>{label}</p>
    </li>
  );
}
