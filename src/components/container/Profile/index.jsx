import Description from '../../profile/Description';
import StatsList from '../../profile/StatsList';

import user from '../../../path/to/user.json';

const Profile = () => {
  return (
    <div className="profile">
      <Description
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatsList statsList={user.stats} />
    </div>
  );
};

export default Profile;
