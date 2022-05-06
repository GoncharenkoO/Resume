import PropTypes from 'prop-types';
import { teamProjects } from '../ProjectsBlock/projectItem/projects-db';
import { ownProjects } from '../ProjectsBlock/projectItem/projects-own';
import ProjectsSection from 'components/ProjectsBlock/ProjectsSection';
import styles from './projects.module.scss';

export default function Projects() {
  const elements = teamProjects.map(
    ({ id, url, screenshot, title, icons, description, stack }) => (
      <ProjectsSection
        key={id}
        url={url}
        screenshot={screenshot}
        title={title}
        icons={icons}
        description={description}
        stack={stack}
      />
    )
  );
  const elementWorks = ownProjects.map(
    ({ id, url, screenshot, title, icons, description, stack }) => (
      <ProjectsSection
        key={id}
        url={url}
        screenshot={screenshot}
        title={title}
        icons={icons}
        description={description}
        stack={stack}
      />
    )
  );
  return (
    <dl className={styles.projectsSection}>
      <dt className={styles.bigTitle}>Projects</dt>
      <dd className={styles.middleTitle}>
        Teamwork
        <ul className={styles.list}>{elements}</ul>
      </dd>
      <dd className={styles.middleTitle}>
        My works
        <ul className={styles.list}>{elementWorks}</ul>
      </dd>
    </dl>
  );
}

Projects.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string,
  screenshot: PropTypes.string,
  title: PropTypes.string,
  icons: PropTypes.string,
  description: PropTypes.string,
  stack: PropTypes.string,
};
