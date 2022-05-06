import ChekItem from './ChekItem';
import styles from './langSkillsBlock.module.scss';

export default function LangSkillsBlock({ label, text }) {
  return (
    <li className={styles.langSkillsBlock}>
      <ChekItem className={styles.chekIcon} />
      <p className={styles.langSkills}>{label}</p>
      <span className={styles.langSkillsText}>{text}</span>
    </li>
  );
}
