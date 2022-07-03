import PropTypes from 'prop-types';

import FriendListItem from '../FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(item => {
        return (
          <FriendListItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.prototype = {
  friends: PropTypes.arrayOf(),
};

export default FriendList;
