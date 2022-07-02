import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';

import user from 'path/to/user.json';
import data from 'path/to/data.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile user={user} />
      <Statistics title="Upload stats" data={data} />
    </div>
  );
};
