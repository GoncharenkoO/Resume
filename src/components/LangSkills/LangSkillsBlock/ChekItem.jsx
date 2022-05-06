import PropTypes from 'prop-types';

const ChekItem = ({ color, className }) => {
  return (
    <svg
      className={className}
      width="17"
      height="17"
      viewBox="0 0 32 32"
      fill={color}
    >
      <path d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path>
    </svg>
  );
};

export default ChekItem;

ChekItem.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};
