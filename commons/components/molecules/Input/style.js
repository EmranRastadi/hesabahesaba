import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 45px;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  opacity: 0;
  transform: scale(0.6);
  input{
    flex : 1;
    height: 45px;
    background: unset;
    border: 1px solid;
    border-radius: 5px;
    padding: 0 10px;
    font-family: iran-sans;
    outline: unset;
  }

  
  #active{
    input{
      transition: 0.3s;
      border: 1px solid #f25461;
    }
  }
`;

const Icon = styled.div`
  width: 0px;
  height: 35px;
  opacity: 0;
  transform: translateX(-10px);
  transition: 0.5s;
  
  &.active{
    transform: translateX(0px);
    opacity: 1;
    transition: 0.5s;
    width: 35px;
  }
`;

export {
    Container,
    Icon
}