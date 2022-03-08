import styled from 'styled-components';

const Container = styled.div`
  width: 350px;
  height: 250px;
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  z-index: 9999999;
`;

const Circle = styled.div`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  border: 15px solid #a9a8ae;
  position: absolute;
  box-shadow: 0 0 18px 17px rgba(0 0 0 / 35%);

  top: 10px;
  right: 0;
`;
const Square = styled.div`
  width: 200px;
  height: 200px;
  border: 15px solid #f25461;
  position: absolute;
  border-radius: 10px;
  left: 0;
  box-shadow: 0 0 18px 17px rgba(0 0 0 / 35%);
  transform: rotate(15deg);
  top: 25px;
  float: right;
`;

export {
  Container,
  Circle,
  Square,
};