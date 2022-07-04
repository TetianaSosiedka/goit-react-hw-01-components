import PropTypes from 'prop-types';

import { TransactionTable } from './styled';

import TransactionHistoryItem from '../TransactionHistoryItem';

const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(item => {
          return (
            <TransactionHistoryItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          );
        })}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.prototype = {
  transactions: PropTypes.arrayOf(),
};

export default TransactionHistory;
