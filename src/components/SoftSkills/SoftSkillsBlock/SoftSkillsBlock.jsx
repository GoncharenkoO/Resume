import ChekItem from './ChekItem';
import styles from './softSkillsBlock.module.scss';

export default function SoftSkillsBlock({ label }) {
  return (
    <li className={styles.softSkillsBlock}>
      <ChekItem className={styles.chekIcon} />
      <p className={styles.softSkills}>{label}</p>
    </li>
  );
}
