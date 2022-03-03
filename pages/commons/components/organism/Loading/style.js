import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  background: #000;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999999999;

  &.deactivate {
    display: none !important;
  }
`;

const Main = styled.div`
  width: 100vw;
  height: 300px;
  position: relative;

  .typo{
    position: absolute;
    z-index: 9;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100px;
    bottom: -60px;
    flex-direction: column;
    p{
      font-family: 'iran-sans' !important;
      
    }
  }
  
  
  .square {
    left: 0px;
    top: 0px;
    bottom: 0px;
    right: 90px;
    margin: auto;
    width: 170px;
    height: 170px;
    position: absolute;
    z-index: 99;
    border: 9px solid #f24f5e;
    border-radius: 10px;
    transform: rotate(20deg) scale(0.7);
   
    @keyframes animateSqure {
      0% {
        opacity: 0;
      }
      70% {
        opacity: 0;
      }
      100% {

        opacity: 1;
      }
    }

    &:after {
      animation: animateSqure 1s;
      animation-delay: 2s;
      transition-delay: 2s;
      animation-iteration-count: 1;
      -webkit-animation-fill-mode: forwards; /* Chrome 16+, Safari 4+ */
      -moz-animation-fill-mode: forwards; /* FF 5+ */
      -o-animation-fill-mode: forwards; /* Not implemented yet */
      -ms-animation-fill-mode: forwards; /* IE 10+ */
      animation-fill-mode: forwards;
      content: '';
      position: absolute;
      top: 76px;
      opacity: 0;
      right: -79px;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      height: 155px;
      width: 155px;
      background: #000000;
      border-radius: 50%;
    }

    li {
      list-style: none;
      width: 15px;
      height: 100px;
      background: #f24f5e;
      animation: animateCirRo 3s linear infinite;
      transform-origin: bottom;
      right: 67px;
      top: -25px;
      opacity: 0;
      position: absolute;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;

      &:nth-child(1) {
        animation-delay: 3.2s;
      }

      &:nth-child(2) {
        animation-delay: 3.4s;
      }

      &:nth-child(3) {
        animation-delay: 3.6s;
      }

      &:nth-child(4) {
        animation-delay: 3.8s;
      }

      &:nth-child(5) {
        animation-delay: 4s;
      }

      &:nth-child(6) {
        animation-delay: 4.2s;
      }

      &:nth-child(7) {
        animation-delay: 4.4s;
      }

      &:nth-child(8) {
        animation-delay: 4.6s;
      }

      &:nth-child(9) {
        animation-delay: 4.8s;
      }

      &:nth-child(10) {
        animation-delay: 5s;
      }

      &:nth-child(11) {
        animation-delay: 5.2s;
      }

      &:nth-child(12) {
        animation-delay: 5.4s;
      }

      &:nth-child(13) {
        animation-delay: 5.6s;
      }

      &:nth-child(14) {
        animation-delay: 5.8s;
      }

      &:nth-child(15) {
        animation-delay: 6s;
      }

      &:nth-child(16) {
        animation-delay: 6.2s;
      }

      &:nth-child(17) {
        animation-delay: 6.4s;
      }

      &:nth-child(18) {
        animation-delay: 6.6s;
      }
    }

    @keyframes animateCirRo {
      0% {
        opacity: 1;
        transform: rotate(0deg);
      }
      100% {
        opacity: 1;
        transform: rotate(-360deg);
      }
    }
  }


  .circle {
    left: 100px;
    right: 0px;
    top: 0;
    bottom: 0px;
    margin: auto;
    width: 200px;
    height: 200px;
    position: absolute;
    z-index: 9;
    background: #a8a9ad;
    border: 10px solid #a8a9ad;
    // transform : translate(-50%,-50%);
    border-radius: 50%;
    transform: scale(0.9);

    &:after {
      content: '';
      position: absolute;
      top: 0px;
      right: 0px;
      height: 180px;
      width: 180px;
      background: #000000;
      border-radius: 50%;
      margin: auto;
      bottom: 0;
      left: 0;
    }

    li {
      list-style: none;
      width: 20px;
      height: 120px;
      background: #a8a9ad;
      -webkit-animation: animate 3s linear infinite;
      animation: animate 3s linear infinite;
      -webkit-transform-origin: bottom;
      -ms-transform-origin: bottom;
      transform-origin: bottom;
      right: 80px;
      opacity: 0;
      top: -31px;
      position: absolute;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;

      &:nth-child(1) {
        animation-delay: 3.2s;
      }

      &:nth-child(2) {
        animation-delay: 3.4s;
      }

      &:nth-child(3) {
        animation-delay: 3.6s;
      }

      &:nth-child(4) {
        animation-delay: 3.8s;
      }

      &:nth-child(5) {
        animation-delay: 4s;
      }

      &:nth-child(6) {
        animation-delay: 4.2s;
      }

      &:nth-child(7) {
        animation-delay: 4.4s;
      }

      &:nth-child(8) {
        animation-delay: 4.6s;
      }

      &:nth-child(9) {
        animation-delay: 4.8s;
      }

      &:nth-child(10) {
        animation-delay: 5s;
      }

      &:nth-child(11) {
        animation-delay: 5.2s;
      }

      &:nth-child(12) {
        animation-delay: 5.4s;
      }

      &:nth-child(13) {
        animation-delay: 5.6s;
      }

      &:nth-child(14) {
        animation-delay: 5.8s;
      }

      &:nth-child(15) {
        animation-delay: 6s;
      }

      &:nth-child(16) {
        animation-delay: 6.2s;
      }

      &:nth-child(17) {
        animation-delay: 6.4s;
      }

      &:nth-child(18) {
        animation-delay: 6.6s;
      }
    }

    @keyframes animate {
      0% {
        opacity: 1;
        transform: rotate(0deg);
      }
      100% {
        opacity: 1;

        transform: rotate(360deg);
      }
    }
  }
`;

const Squre = styled.div`

`;
const Circle = styled.ul`
  width: 280px;
  height: 280px;
  position: absolute;
  z-index: 9;
  right: 70px;
  background: #a8a9ad;
  border: 15px solid #a8a9ad;
  // transform : translate(-50%,-50%);
  border-radius: 50%;
  transform: scale(0.9);

  &:after {
    content: '';
    position: absolute;
    top: 125px;
    right: -125px;
    transform: translate(-50%, -50%);
    height: 250px;
    width: 250px;
    background: #000000;
    border-radius: 50%;
  }

  li {
    list-style: none;
    width: 27px;
    height: 180px;
    background: #a8a9ad;
    animation: animate 3s linear infinite;
    transform-origin: bottom;
    right: 115px;
    top: -55px;
    position: absolute;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    &:nth-child(1) {
      animation-delay: 0.2s;
    }

    &:nth-child(2) {
      animation-delay: 0.4s;
    }

    &:nth-child(3) {
      animation-delay: 0.6s;
    }

    &:nth-child(4) {
      animation-delay: 0.8s;
    }

    &:nth-child(5) {
      animation-delay: 1s;
    }

    &:nth-child(6) {
      animation-delay: 1.2s;
    }

    &:nth-child(7) {
      animation-delay: 1.4s;
    }

    &:nth-child(8) {
      animation-delay: 1.6s;
    }

    &:nth-child(9) {
      animation-delay: 1.8s;
    }

    &:nth-child(10) {
      animation-delay: 2s;
    }

    &:nth-child(11) {
      animation-delay: 2.2s;
    }

    &:nth-child(12) {
      animation-delay: 2.4s;
    }

    &:nth-child(13) {
      animation-delay: 2.6s;
    }

    &:nth-child(14) {
      animation-delay: 2.8s;
    }

    &:nth-child(15) {
      animation-delay: 3s;
    }

    &:nth-child(16) {
      animation-delay: 3.2s;
    }

    &:nth-child(17) {
      animation-delay: 3.4s;
    }

    &:nth-child(18) {
      animation-delay: 3.6s;
    }
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export {Container, Main, Squre, Circle};
