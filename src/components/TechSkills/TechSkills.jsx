import PropTypes from 'prop-types';
import TechSkillsBlock from './TechSkillsBlock';
import { techSkillsItems } from './TechSkillsBlock/techskills';
import styles from './techSkills.module.scss';

export default function TechSkills() {
  const elements = techSkillsItems.map(({ id, label }) => (
    <TechSkillsBlock key={id} label={label} />
  ));
  return (
    <div className={styles.techSkillsSection}>
      <h3 className={styles.techSkillsTitle}>Tech Skills</h3>
      <ul className={styles.techSkillsList}>{elements}</ul>
    </div>
  );
}

TechSkills.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
};
