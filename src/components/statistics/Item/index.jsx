import PropTypes from 'prop-types';

import { DateItem, DateItemLabel, DateItemQuantity } from './styled';

const Item = ({ label, percentage }) => {
  return (
    <DateItem>
      <DateItemLabel>{label}</DateItemLabel>
      <DateItemQuantity>{percentage}</DateItemQuantity>
    </DateItem>
  );
};

Item.prototype = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Item;
