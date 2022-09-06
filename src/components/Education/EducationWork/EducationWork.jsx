import styles from './educationWork.module.scss';

export default function EducationWork({
  position,
  period,
  university,
  country,
  link,
}) {
  return (
    <li className={styles.educationItem}>
      <h4 className={styles.educationTitle}>{university}</h4>
      <a
        href={link}
        className={styles.educationText}
        target="_blank"
        rel="noreferrer"
      >
        {position}
      </a>
      <p className={styles.educationTime}>
        {period}
        <span className={styles.divider}>|</span>
        {country}
      </p>
    </li>
  );
}
