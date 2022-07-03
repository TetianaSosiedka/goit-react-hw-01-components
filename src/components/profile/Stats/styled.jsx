import styled from 'styled-components';

export const StatesList = styled.ul`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 250px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #e5e5e5;
`;

export const StatesItem = styled.li`
  list-style-type: none;
  margin-right: 20px;
`;

export const StatsItemLabel = styled.span`
  display: block;
  font-weight: 700;
`;

export const StatsItemQuantity = styled.span`
  font-size: 15px;
`;
