import propTypes from 'prop-types';

const StatsItem = ({ followers, views, likes }) => {
  return (
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  );
};

StatsItem.propTypes = {
  followers: propTypes.number,
  views: propTypes.number,
  likes: propTypes.number,
};

export default StatsItem;
