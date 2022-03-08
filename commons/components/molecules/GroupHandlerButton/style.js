import styled from "styled-components";

const Container = styled.div`
  width: 150px;
  height: 40px;
  position: fixed;
  bottom: 15px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  z-index: 999999999;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Item = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  background: #fff;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 25px 3px rgb(0 0 0 / 30%);
`

export {
    Container,
    Item
}