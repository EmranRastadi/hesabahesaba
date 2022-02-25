import styled from "styled-components";

const Main = styled.div`
  .luncher {
    width: 100%;
    height: 100vh;
    top: 0px;
    left: 0px;
    position: fixed;
    background: rgba( 0 0 0 / 80%);
    transform: none;
    opacity: 1;
    z-index: 9;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    row-gap: 15px;
  }
  
  
  
  
  
  .animationContainer{
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
  }

  .absoluteCircle {
    width: 800px;
    height: 800px;
    border-radius: 50%;
    background: #f57f17;
    opacity: 0.3;
    left: -200px;
    bottom: -100px;
    position: absolute;
  }

  .triangle {
    width: 160px;
    height: 160px;
    position: relative;
    box-sizing: border-box;
  }
  
  
`;


export {
    Main
}