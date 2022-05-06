import PropTypes from 'prop-types';
import SoftSkillsBlock from './SoftSkillsBlock';
import { softSkillsItems } from './softskillsitem/softskills';
import styles from './softSkills.module.scss';

export default function SoftSkills() {
  const elements = softSkillsItems.map(({ id, label }) => (
    <SoftSkillsBlock key={id} label={label} />
  ));
  return (
    <div className={styles.softSkillsSection}>
      <h3 className={styles.softSkillsTitle}>Soft Skills</h3>
      <ul className={styles.softSkillsList}>{elements}</ul>
    </div>
  );
}

SoftSkills.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
};
