import propTypes from 'prop-types';
import Description from '../Description';
import Stats from '../Stats';

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <Description
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <Stats stats={user.stats} />
    </div>
  );
};

Profile.propTypes = {
  user: propTypes.shape({
    username: propTypes.string,
    tag: propTypes.string,
    location: propTypes.string,
    avatar: propTypes.string,
    stats: propTypes.shape({}),
  }),
};

export default Profile;
