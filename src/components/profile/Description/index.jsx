import propTypes from 'prop-types';

import {
  Container,
  WrapDescriptions,
  Avatar,
  Name,
  Tag,
  Location,
} from './styled';

const Description = ({ username, tag, location, avatar }) => {
  return (
    <Container>
      <Avatar src={avatar} alt="User avatar" />
      <WrapDescriptions>
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </WrapDescriptions>
    </Container>
  );
};

Description.propTypes = {
  username: propTypes.string,
  tag: propTypes.string,
  location: propTypes.string,
  avatar: propTypes.string,
};

export default Description;
