import styled from 'styled-components';

export const TransactionTr = styled.tr`
  & td {
    line-height: 1.8;
    text-align: center;
  }
  &:nth-child(2n + 1) {
    background-color: #e5e5e5;
  }
`;
