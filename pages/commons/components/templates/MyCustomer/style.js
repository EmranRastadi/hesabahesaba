import styled from 'styled-components';

const Main = styled.div`
  background-image: url(${props => props?.theme?.customer?.src?.src}) ;
  height: 400px;
  float: right;
  position: relative;
  width: 100vw;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
  background-repeat: unset;
  background-position: bottom;

  .hilight{
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0 0 0 / 20%);

  }
  .luncher {
    width: 100%;
    height: 100vh;
    top: 0px;
    left: 0px;
    position: relative;
    float: right;
    transform: none;
    overflow: hidden;
    opacity: 1;
    z-index: 9;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }


  .animationContainer {
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
  Main,
};