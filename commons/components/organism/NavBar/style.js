import styled from 'styled-components';


const Container = styled.div`
  .top-navbar {
    width: 100vw;
    height: 60px;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 99999999;
    background: linear-gradient(-45deg,rgba(0 0 0 / 90%),rgba(0 0 0 / 30%),transparent);
  }
`;

const List = styled.div`
  float : right;
  height: 60px;
  
`;

export {
    Container,
    List,
}