import styles from './techSkillsBlock.module.scss';

export default function TechSkillsBlock({ label }) {
  return (
    <li className={styles.techSkillsBlock}>
      <p className={styles.techSkills}>{label}</p>
    </li>
  );
}
