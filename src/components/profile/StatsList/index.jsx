import propTypes from 'prop-types';

import StatsItem from '../StatsItem';

const StatsList = ({ statsList }) => {
  return (
    <ul className="stats">
      <StatsItem
        followers={statsList.followers}
        views={statsList.views}
        likes={statsList.views}
      />
      <StatsItem
        followers={statsList.followers}
        views={statsList.views}
        likes={statsList.views}
      />
      <StatsItem
        followers={statsList.followers}
        views={statsList.views}
        likes={statsList.views}
      />
    </ul>
  );
};

StatsList.propTypes = {
  statsList: propTypes.shape({}),
};
export default StatsList;
