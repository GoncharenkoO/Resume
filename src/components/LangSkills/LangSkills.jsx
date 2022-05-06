import PropTypes from 'prop-types';
import LangSkillsBlock from './LangSkillsBlock';
import { langSkillsItems } from './langskillsitem/langskills';
import styles from './langSkills.module.scss';

export default function LangSkills() {
  const elements = langSkillsItems.map(({ id, label, text }) => (
    <LangSkillsBlock key={id} label={label} text={text} />
  ));
  return (
    <div className={styles.langSkillsSection}>
      <h3 className={styles.langSkillsTitle}>Language Skills</h3>
      <ul className={styles.langSkillsList}>{elements}</ul>
    </div>
  );
}

LangSkills.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.string,
};
