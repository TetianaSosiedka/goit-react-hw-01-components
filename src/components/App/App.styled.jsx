import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1280px;
  }
  background-color: #e5e5e5;
`;
export default Container;
