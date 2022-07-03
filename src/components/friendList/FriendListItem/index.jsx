import PropTypes from 'prop-types';

import { FriendsItem, FriendAvatar, FriendName, FriendStatys } from './styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      <FriendStatys status={isOnline}>{isOnline} </FriendStatys>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendsItem>
  );
};

FriendListItem.prototype = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
