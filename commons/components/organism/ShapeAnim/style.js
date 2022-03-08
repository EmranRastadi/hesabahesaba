import styled from 'styled-components';

const Container = styled.div`
  width: 40000px;
  // height: ${props => props?.theme?.mainSlider?.height}px;
  height : 100vh;
  position: fixed;
  z-index: 9999;
  left: 0px;
  transform: translateX(-200px);
  top: 0px;
  //animation: 500s myanims linear infinite;
  

  @-webkit-keyframes myanims{
    from {
      -webkit-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    to {
      -webkit-transform: translateX(-40000px);
      -o-transform: translateX(-40000px);
      transform: translateX(-40000px);
    }
  }
  @keyframes myanims {
    from {
      -ms-transform: translateX(0);
      -moz-transform: translateX(0);
      -webkit-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    to {
      -ms-transform: translateX(-40000px);
      -moz-transform: translateX(-40000px);
      -webkit-transform: translateX(-40000px);
      -o-transform: translateX(-40000px);
      transform: translateX(-40000px);
    }
  }
`;

export { Container };
