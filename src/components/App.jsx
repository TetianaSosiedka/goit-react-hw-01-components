import Profile from './profile/Profile';
import propTypes from 'prop-types';
import user from '../path/to/user.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile user={user} />
    </div>
  );
};
App.propTypes = {
  user: propTypes.shape({}),
};
