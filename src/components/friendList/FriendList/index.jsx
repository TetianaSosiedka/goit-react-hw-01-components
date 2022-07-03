import PropTypes from 'prop-types';

import { FriendsList } from './styled';

import FriendListItem from '../FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <FriendsList>
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
    </FriendsList>
  );
};

FriendList.prototype = {
  friends: PropTypes.arrayOf(),
};

export default FriendList;
