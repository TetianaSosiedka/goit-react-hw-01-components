import Item from '../Item';

import PropTypes from 'prop-types';

import { DateList } from './styled';

const Date = ({ data }) => {
  return (
    <DateList>
      {data.map(item => {
        return (
          <Item key={item.id} label={item.label} percentage={item.percentage} />
        );
      })}
    </DateList>
  );
};

Date.prototype = {
  data: PropTypes.arrayOf().isRequired,
};

export default Date;
