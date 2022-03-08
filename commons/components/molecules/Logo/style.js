import styled from 'styled-components'

const Container = styled.div`
  width: 140px;
  height: 60px;
  right : 5px;
  transform: scale(${props => props?.theme?.Logo?.scale});
  float: ${props => props?.theme?.Logo?.float};
  position: relative;
`;
const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  border: 4px solid #a9a8ae;
  right: 0px;
  top: 5px;
`;
const Square = styled.div`
  border-radius: 10px;
  border: 4px solid #f25461;
  height: 45px;
  width: 45px;
  right: 30px;
  top: 7px;
  position : absolute;
  transform: rotate(
          20deg);
`;
export {
    Container,
    Circle,
    Square
}