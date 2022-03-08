import styled from 'styled-components';

const Container = styled.div`
  .container {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    bottom: 10px;
    cursor: pointer;
    
    left: 0px;
    right: 0px;
    margin: 0 auto;
    background: #fff;
    box-shadow: 0 0 15px 3px rgba(0 0 0 / 30%);
  }
`;

export {
  Container,
};