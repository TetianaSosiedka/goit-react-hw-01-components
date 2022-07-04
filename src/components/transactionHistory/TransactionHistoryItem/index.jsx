import PropTypes from 'prop-types';

import { TransactionTr } from './styled';

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <TransactionTr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TransactionTr>
  );
};

TransactionHistoryItem.prototype = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionHistoryItem;
