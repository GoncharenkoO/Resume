import PropTypes from 'prop-types';
import { teamProjects } from './ProjectsSection/projects';
import { ownProjects } from './ProjectsSection/projects';
import ProjectsSection from 'components/ProjectsBlock/ProjectsSection';
import styles from './projects.module.scss';

export default function Projects() {
  const elements = teamProjects.map(({ id, label, repo, info, link, tech }) => (
    <ProjectsSection
      key={id}
      label={label}
      repo={repo}
      info={info}
      link={link}
      tech={tech}
    />
  ));
  const elementWorks = ownProjects.map(
    ({ id, label, repo, info, link, tech }) => (
      <ProjectsSection
        key={id}
        label={label}
        repo={repo}
        info={info}
        link={link}
        tech={tech}
      />
    )
  );
  return (
    <div className={styles.projectsSection}>
      <h3 className={styles.bigTitle}>Project experience</h3>
      <div>
        <ul className={styles.list}>{elements}</ul>
      </div>
      <div>
        <ul className={styles.list}>{elementWorks}</ul>
      </div>
    </div>
  );
}

Projects.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  stack: PropTypes.string,
};
