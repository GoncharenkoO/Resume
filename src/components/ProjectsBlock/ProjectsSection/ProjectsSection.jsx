import Desc from '../SvgComponent/Desc';
import Tools from '../SvgComponent/Tools';
import styles from './projectsSection.module.scss';

export default function ProjectsSection({
  url,
  screenshot,
  title,
  description,
  stack,
}) {
  return (
    (
      <li className={styles.item}>
        <a href={url} className={styles.link}>
          <img
            className={styles.screenshot}
            src={screenshot}
            alt={screenshot}
            width="100px"
            height="50px"
          />
          <div className={styles.sections}>
            <h4 className={styles.nameTitle}>{title}</h4>
            <div className={styles.content}>
              <Desc className={styles.itemImg} color="#b8bcb8" />
              <span className={styles.desc}>{description}</span>
            </div>
            <div className={styles.content}>
              <Tools className={styles.itemImg} color="#b8bcb8" />
              <span className={styles.desc}>{stack}</span>
            </div>
          </div>
        </a>
      </li>
    ),
    (
      <li className={styles.item}>
        <a href={url} className={styles.link}>
          <img
            className={styles.screenshot}
            src={screenshot}
            alt={screenshot}
            width="100px"
            height="50px"
          />
          <div className={styles.sections}>
            <h4 className={styles.nameTitle}>{title}</h4>
            <div className={styles.content}>
              <Desc className={styles.itemImg} color="#b8bcb8" />
              <span className={styles.desc}>{description}</span>
            </div>
            <div className={styles.content}>
              <Tools className={styles.itemImg} color="#b8bcb8" />
              <span className={styles.desc}>{stack}</span>
            </div>
          </div>
        </a>
      </li>
    )
  );
}
