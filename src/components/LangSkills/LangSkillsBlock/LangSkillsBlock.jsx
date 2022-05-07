import styles from './langSkillsBlock.module.scss';

export default function LangSkillsBlock({ label }) {
  return (
    <li className={styles.langSkillsBlock}>
      <p className={styles.langSkills}>{label}</p>
    </li>
  );
}
