import styles from './educationWork.module.scss';

export default function EducationWork({
  position,
  period,
  university,
  country,
}) {
  return (
    <li className={styles.educationItem}>
      <h4 className={styles.educationTitle}>{university}</h4>
      <h5 className={styles.educationText}>{position}</h5>
      <p className={styles.educationTime}>
        {period}
        <span className={styles.divider}>|</span>
        {country}
      </p>
    </li>
  );
}
