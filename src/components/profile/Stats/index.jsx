import propTypes from 'prop-types';

import {
  StatesList,
  StatesItem,
  StatsItemLabel,
  StatsItemQuantity,
} from './styled';

const Stats = ({ stats }) => {
  return (
    <StatesList>
      <StatesItem>
        <StatsItemLabel>Followers</StatsItemLabel>
        <StatsItemQuantity>{stats.followers}</StatsItemQuantity>
      </StatesItem>
      <StatesItem>
        <StatsItemLabel>Views</StatsItemLabel>
        <StatsItemQuantity>{stats.views}</StatsItemQuantity>
      </StatesItem>
      <StatesItem>
        <StatsItemLabel>Likes</StatsItemLabel>
        <StatsItemQuantity>{stats.likes}</StatsItemQuantity>
      </StatesItem>
    </StatesList>
  );
};

Stats.propTypes = {
  stats: propTypes.shape({
    followers: propTypes.number,
    views: propTypes.number,
    likes: propTypes.number,
  }),
};
export default Stats;
