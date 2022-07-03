import propTypes from 'prop-types';

import Container from './styled';

import Description from '../Description';
import Stats from '../Stats';

const Profile = ({ user }) => {
  return (
    <Container>
      <Description
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <Stats stats={user.stats} />
    </Container>
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
