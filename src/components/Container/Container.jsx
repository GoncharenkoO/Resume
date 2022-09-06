import PropTypes from 'prop-types';
import styles from './container.module.scss';

const Container = ({ children }) => {
  return <main className={styles.container}>{children}</main>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
