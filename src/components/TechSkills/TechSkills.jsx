import TechSkillsBlock from './TechSkillsBlock';
import styles from './techSkills.module.scss';

export default function TechSkills() {
  return (
    <div className={styles.techSkillsSection}>
      <h3 className={styles.techSkillsTitle}>Tech Skills</h3>
      <TechSkillsBlock />
    </div>
  );
}
