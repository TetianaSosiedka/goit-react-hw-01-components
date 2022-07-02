import Item from '../Item';

import PropTypes from 'prop-types';

const Date = ({ data }) => {
  return (
    <ul className="stat-list">
      {data.map(item => {
        return (
          <Item key={item.id} label={item.label} percentage={item.percentage} />
        );
      })}
    </ul>
  );
};

Date.prototype = {
  data: PropTypes.arrayOf().isRequired,
};

export default Date;
