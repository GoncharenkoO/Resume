import styles from './experience.module.scss';

export default function Experience({
  position,
  period,
  dities,
  company,
  country,
}) {
  return (
    <li className={styles.experienceItem}>
      <h4 className={styles.experienceTitle}>
        {position} &nbsp;
        <span className={styles.experienceCompany}>{company}</span>
      </h4>
      <p className={styles.experienceTime}>
        {period}
        <span className={styles.divider}>|</span>
        {country}
      </p>
      <ol>
        {dities.map(({ id, duty }) => (
          <li key={id} className={styles.duty}>
            {duty}
          </li>
        ))}
      </ol>
    </li>
  );
}
