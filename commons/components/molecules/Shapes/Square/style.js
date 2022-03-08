import styled from "styled-components";

const Main = styled.div`
  .motion-graphy-square{
    width: ${props=>props?.theme?.motionGraphy?.square?.width}px;
    position: absolute;
    left : ${props=>props?.theme?.motionGraphy?.square?.left}px;
    height: ${props=>props?.theme?.motionGraphy?.square?.height}px;
    -webkit-animation: motionGraphy 15s linear infinite;
    -moz-animation: motionGraphy 15s linear infinite;
    bottom : -100px;
    opacity: 0.5;
    animation-delay: ${props=>props?.theme?.motionGraphy?.square?.delay}s;
    -o-animation: motionGraphy 10s linear infinite;
    animation: motionGraphy 10s linear infinite;
    @-webkit-keyframes motionGraphy {
      from {
        transform: translateY(10vh) ;
      }
      to {
        transform: translateY(-110vh) ;
      }
    }
    @keyframes motionGraphy {
      from {
        transform: translateY(10vh);
      }
      to {
        transform: translateY(-110vh);
      }
    }
`

export {
    Main
}