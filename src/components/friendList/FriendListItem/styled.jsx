import styled from 'styled-components';

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px 20px;
  list-style-type: none;
  background-color: #ffffff;
`;
const color = props => {
  return props.status ? 'green' : 'red';
};

export const FriendStatys = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  margin-right: 25px;
  border-radius: 50%;
  background-color: ${color};
`;

export const FriendAvatar = styled.img`
  margin-right: 10px;
`;

export const FriendName = styled.p`
  font-weight: 700;
`;
