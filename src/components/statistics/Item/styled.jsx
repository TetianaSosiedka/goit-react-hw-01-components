import styled from 'styled-components';

const color = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
};

export const DateItem = styled.li`
  display: block;
  padding: 10px 30px;
  list-style-type: none;
  background-color: ${color};
`;
export const DateItemLabel = styled.span`
  display: block;
  margin-bottom: 10px;
  font-weight: 700;
`;

export const DateItemQuantity = styled.span`
  display: flex;
  justify-content: center;
`;
