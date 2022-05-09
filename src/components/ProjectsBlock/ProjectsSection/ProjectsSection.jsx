import propTypes from 'prop-types';
import { Item, Wrapper, Info, Tech, Link } from './ProjectsSection.style';

function Projects({ label, link, info, tech, repo }) {
  return (
    <Item>
      <Wrapper>
        <Link
          href={link}
          target="_blank"
          rel="noreferrer"
          aria-label="Live page"
        >
          {label}
        </Link>
        <Link
          href={repo}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub repository"
        >
          Github
        </Link>
        <Tech>[{tech}]</Tech>
      </Wrapper>
      <Info>{info}</Info>
    </Item>
  );
}

Projects.propTypes = {
  info: propTypes.string,
  label: propTypes.string,
  link: propTypes.string,
  preview: propTypes.string,
  repo: propTypes.string,
  tech: propTypes.string,
};

export default Projects;
