import PropTypes from 'prop-types';
import Experience from './Experience';
import { experience } from './experienceItem/experiencework';
import styles from './workExperience.module.scss';

export default function WorkExperience() {
  const elements = experience.map(
    ({ id, position, period, company, country, dities }) => (
      <Experience
        key={id}
        position={position}
        period={period}
        company={company}
        country={country}
        dities={dities}
      />
    )
  );
  return (
    <dl>
      <dt className={styles.workExperienceSection}></dt>
      <dd className={styles.workTitle}>
        Work Experience
        <ul className={styles.workList}>{elements}</ul>
      </dd>
    </dl>
  );
}

WorkExperience.propTypes = {
  id: PropTypes.string,
  position: PropTypes.string,
  period: PropTypes.string,
  company: PropTypes.string,
  country: PropTypes.string,
  dities: PropTypes.arrayOf(PropTypes.object),
};
