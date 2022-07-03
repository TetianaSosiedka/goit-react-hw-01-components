import Container from './App.styled';

import Profile from '../profile/Profile';
import Statistics from '../statistics/Statistics';
import FriendList from '../friendList/FriendList';
import TransactionHistory from '../transactionHistory/TransactionHistory';

import user from 'path/to/user.json';
import data from 'path/to/data.json';
import friends from 'path/to/friends.json';
import transactions from 'path/to/transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};
