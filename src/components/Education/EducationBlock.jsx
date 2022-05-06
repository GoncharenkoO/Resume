import PropTypes from 'prop-types';
import EducationWork from './EducationWork';
import { educationItem } from './educationItem/education-item';
import styles from './educationBlock.module.scss';

export default function Education() {
  const elements = educationItem.map(
    ({ id, position, period, university, country }) => (
      <EducationWork
        key={id}
        position={position}
        period={period}
        university={university}
        country={country}
      />
    )
  );
  return (
    <div className={styles.educationExperienceSection}>
      <h3 className={styles.educationTitle}>Education</h3>
      <ul className={styles.educationList}>{elements}</ul>
    </div>
  );
}

Education.propTypes = {
  id: PropTypes.string,
  position: PropTypes.string,
  period: PropTypes.string,
  company: PropTypes.string,
  country: PropTypes.string,
};
