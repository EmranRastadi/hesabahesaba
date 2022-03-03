import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  height: 100%;
  position: relative;
`;
const Background = styled.div`
  width: 6000px;
  height: 100vh;
  position: relative;
  overflow: hidden;

  img {
    height: 100%;
    position: ablolute;
    right: 0;
  }
`;

const Forground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0 0 0 / 30%);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99;
`;

//  Glassesssss *********

const GlassesContainer = styled.div`
    // width: ${(props) => props?.theme?.mainSlider?.width}px;
    // height: ${(props) => props?.theme?.mainSlider?.height}px;
  width: 1000px;
  height: 500px;
  transform: scale(${(props) => props?.theme?.mainSlider?.scale});
  position: absolute;
    // top: ${(props) => props?.theme?.mainSlider?.top}px;
  top: 0;
  bottom: 0px;
  right: 0;
    // left: ${(props) => props?.theme?.mainSlider?.left}px;
  left: 0;
  // background: #fff;
  // margin: auto;
`;

const SqureGlasses = styled.div`
  width: 350px;
  height: 350px;
  overflow: hidden;
  // transform: rotate(45deg);
  position: absolute;
  left: 0;
  top: 0;
  // clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  border-radius: 15px;
  // border: 15px solid #f1f1f1;
  background: unset;
`;

const CircleGlasses = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 15px solid #f1f1f1;
  position: absolute;
  right: 0;
  top: 0;
`;

const Image = styled.div`
  width: 6000px;
  //height: 100vh;
  height: 630px;
  position: relative;
  overflow: hidden;
  // transform: rotate(-45deg);
  img {
    // opacity: 0.3;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    background-attachment: fixed;
    background-size: cover;
  }
`;

///is new

const MainContainer = styled.div`
  width: 40000px;
  height: 100vh;
    // height: ${props => props?.theme?.mainSlider?.height}px;
  //height: 630px;
  left: 0px;
  top: 0px;
  position: fixed;
  background-size: contain;
  background-repeat-x: repeat;
  background-repeat-y: no-repeat;
  animation: 500s myanimWhole linear infinite;
  @-webkit-keyframes myanimWhole {
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
  @keyframes myanimWhole {
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

  //@media screen and (min-width: 768px){
  //  height: 450px !important;
  //  background-size: 2700px auto;
  //
  //}
  //
  //@media screen and (min-width: 1028px){
  //  height: 600px !important;
  //  background-size: 4000px auto;
  //}
`;

// background-position: -${(props) => props?.theme?.mainSlider?.loupeLeft}vw -10vh;
const MainContainerLoupe = styled.div`
  width: 40000px;
  //height: 100vh;
  overflow: hidden;
  height: 250px;
    // height: ${props => props?.theme?.mainSlider?.height}px;
  position: fixed;
  left: 0;
  top: 0;
  //background-size: 4000px auto;
    // background-position: -${(props) => props?.theme?.mainSlider?.loupeLeft}vw -10vh;
  //background-position: 0 0;
  background-size: 1500px auto;
  animation: 500s myanimWhole linear infinite;
  @-webkit-keyframes myanimWhole {
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
  @keyframes myanimWhole {
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


  @media screen and (min-width: 768px) {
    height: 450px !important;
    background-size: 2700px auto;

  }

  @media screen and (min-width: 1028px) {
    height: 600px !important;
    background-size: 4000px auto;
  }
`;

const MainContainerSqure = styled.div`
  width: 40000px;
  height: 100vh;
    // height: ${props => props?.theme?.mainSlider?.height}px;
  position: fixed;
  left: 0;
  top: 0;
  background-size: contain;
  //background-position: -7vw -10vh;
  //transform: translateX(-1250px);
  background-repeat-x: repeat;
  background-repeat-y: no-repeat;

  transform: translateX(-200px);

  //animation: 500s myanimWhole linear infinite;
  @-webkit-keyframes myanimWhole {
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
  @keyframes myanimWhole {
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


  //@media screen and (min-width: 768px){
  //  height: 450px !important;
  //  background-size: 2700px auto;
  //
  //}
  //
  //@media screen and (min-width: 1028px){
  //  height: 600px !important;
  //  background-size: 4000px auto;
  //}
`;

const MainEye = styled.div`
  width: 100vw;
  //padding-left: 7vw;
  //height: 100%;
  height: 100vh;
  position: absolute;
  //display: flex;
  //align-items: center;
  //column-gap: 20px;
  //justify-content: center;
  //overflow: hidden;
  //top: 3vh;


  //@media screen and (min-width: 768px){
  //  height: 450px !important;
  //}
  //
  //@media screen and (min-width: 1028px){
  //  height: 600px !important;
  //}

  @-webkit-keyframes myanimEys {
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
  @keyframes myanimEys {
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

// background-position: ${(props) =>
//   props?.theme?.mainSlider?.backgroundPosition};

const Loupe = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  //cursor: none;
  border-radius: 50%;
  //position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
  // border: 2px solid #fff;
  clip-path: circle(50% at 50% 50%);
  background-size: 4000px auto;
  @media screen and (min-width: 768px) {
    height: 350px !important;
    width: 350px !important;
  }

  @media screen and (min-width: 1028px) {
    height: 500px !important;
    width: 500px !important;
  }
`;

const Squre = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  //cursor: none;
  border-radius: 20px;
  // transform: rotate(45deg);
  //clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  clip-path: polygon(50% 0, 100% 0, 50% 100%, 0% 100%);
  background-size: contain;
  //@media screen and (min-width: 768px){
  //  height: 350px !important;
  //  width: 350px !important;
  //}
  //
  //@media screen and (min-width: 1028px){
  //  height: 500px !important;
  //  width: 500px !important;
  //}
`;

const Body = styled.div`
  position: relative;

  left: 0;
  top: 0;
  float: right;
  width: 100vw;
  height: 100vh;
  overflow: hidden;


  #main-background-this {
    display: flex;
    align-items: center;
    justify-content: center;
    //-webkit-animation: backgrounMotion 400s linear infinite;
    //-moz-animation: backgrounMotion 400s linear infinite;
    //-ms-animation: backgrounMotion 400s linear infinite;
    //-o-animation: backgrounMotion 400s linear infinite;
    float: left;
    //animation: backgrounMotion 400s linear infinite;
    @-webkit-keyframes backgrounMotion {
      from {
        -ms-transform: translateX(50000px);
        -moz-transform: translateX(50000px);
        -webkit-transform: translateX(50000px);
        -o-transform: translateX(50000px);
        transform: translateX(50000px);
        transform-origin: center;
        transform-box: fill-box;
      }
      to {

        -ms-transform: translateX(0vw);
        -moz-transform: translateX(0vw);
        -webkit-transform: translateX(0vw);
        -o-transform: translateX(0vw);
        transform: translateX(0vw);
        transform-origin: center;
        transform-box: fill-box;
      }
      //100% {
      //  -ms-transform: translateY(10px);
      //  -moz-transform: translateY(10px);
      //  -webkit-transform: translateY(10px);
      //  -o-transform: translateY(10px);
      //  transform: translateY(10px);
      //  transform-origin: center;
      //  transform-box: fill-box;
      //
      //}
    }
    @keyframes backgrounMotion {
      from {


        -ms-transform: translateX(0vw);
        -moz-transform: translateX(0vw);
        -webkit-transform: translateX(0vw);
        -o-transform: translateX(0vw);
        transform: translateX(0vw);
        transform-origin: center;
        transform-box: fill-box;
      }
      to {
        -ms-transform: translateX(-50000px);
        -moz-transform: translateX(-50000px);
        -webkit-transform: translateX(-50000px);
        -o-transform: translateX(-50000px);
        transform: translateX(-50000px);
        transform-origin: center;
        transform-box: fill-box;

      }
    }

    // left tarazo style

    #left-tarazo {
      -webkit-animation: rightTarazu 2s linear infinite;
      -moz-animation: rightTarazu 2s linear infinite;
      -ms-animation: rightTarazu 2s linear infinite;
      -o-animation: rightTarazu 2s linear infinite;
      animation: rightTarazu 2s linear infinite;
      @-webkit-keyframes rightTarazu {
        0% {
          -ms-transform: translateY(10px);
          -moz-transform: translateY(10px);
          -webkit-transform: translateY(10px);
          -o-transform: translateY(10px);
          transform: translateY(10px);
          transform-origin: center;
          transform-box: fill-box;
        }
        50% {

          -ms-transform: translateY(-15px);
          -moz-transform: translateY(-15px);
          -webkit-transform: translateY(-15px);
          -o-transform: translateY(-15px);
          transform: translateY(-15px);
          transform-origin: center;
          transform-box: fill-box;
        }
        100% {
          -ms-transform: translateY(10px);
          -moz-transform: translateY(10px);
          -webkit-transform: translateY(10px);
          -o-transform: translateY(10px);
          transform: translateY(10px);
          transform-origin: center;
          transform-box: fill-box;

        }
      }
      @keyframes rightTarazu {
        0% {
          -ms-transform: translateY(10px);
          -moz-transform: translateY(10px);
          -webkit-transform: translateY(10px);
          -o-transform: translateY(10px);
          transform: translateY(10px);
          transform-origin: center;
          transform-box: fill-box;
        }
        50% {

          -ms-transform: translateY(-15px);
          -moz-transform: translateY(-15px);
          -webkit-transform: translateY(-15px);
          -o-transform: translateY(-15px);
          transform: translateY(-15px);
          transform-origin: center;
          transform-box: fill-box;
        }
        100% {
          -ms-transform: translateY(10px);
          -moz-transform: translateY(10px);
          -webkit-transform: translateY(10px);
          -o-transform: translateY(10px);
          transform: translateY(10px);
          transform-origin: center;
          transform-box: fill-box;

        }
      }

    }

    #right-tarazu {


      -webkit-animation: leftTarazu 2s linear infinite;
      -moz-animation: leftTarazu 2s linear infinite;
      -ms-animation: leftTarazu 2s linear infinite;
      -o-animation: leftTarazu 2s linear infinite;
      animation-delay: 4s;
      transition-delay: 4s;
      animation: leftTarazu 2s linear infinite;

      @-webkit-keyframes leftTarazu {
        0% {
          -ms-transform: translateY(10px);
          -moz-transform: translateY(10px);
          -webkit-transform: translateY(10px);
          -o-transform: translateY(10px);
          transform: translateY(10px);
          transform-origin: center;
          transform-box: fill-box;
        }
        50% {

          -ms-transform: translateY(-15px);
          -moz-transform: translateY(-15px);
          -webkit-transform: translateY(-15px);
          -o-transform: translateY(-15px);
          transform: translateY(-15px);
          transform-origin: center;
          transform-box: fill-box;
        }
        100% {
          -ms-transform: translateY(10px);
          -moz-transform: translateY(10px);
          -webkit-transform: translateY(10px);
          -o-transform: translateY(10px);
          transform: translateY(10px);
          transform-origin: center;
          transform-box: fill-box;

        }

      }
      @keyframes leftTarazu {
        0% {
          -ms-transform: translateY(-15px);
          -moz-transform: translateY(-15px);
          -webkit-transform: translateY(-15px);
          -o-transform: translateY(-15px);
          transform: translateY(-15px);
          transform-origin: center;
          transform-box: fill-box;

        }
        50% {
          -ms-transform: translateY(10px);
          -moz-transform: translateY(10px);
          -webkit-transform: translateY(10px);
          -o-transform: translateY(10px);
          transform: translateY(10px);
          transform-origin: center;
          transform-box: fill-box;
        }
        100% {
          -ms-transform: translateY(-15px);
          -moz-transform: translateY(-15px);
          -webkit-transform: translateY(-15px);
          -o-transform: translateY(-15px);
          transform: translateY(-15px);
          transform-origin: center;
          transform-box: fill-box;

        }
      }
    }


    // style to hospital big heart
    #big-heart-hos-main {
      -webkit-animation: hospitalBigHeartss 2s linear infinite;
      -moz-animation: hospitalBigHeartss 2s linear infinite;
      -ms-animation: hospitalBigHeartss 2s linear infinite;
      -o-animation: hospitalBigHeartss 2s linear infinite;
      animation: hospitalBigHeartss 2s linear infinite;
      @-webkit-keyframes hospitalBigHeartss {
        0% {
          -webkit-transform: translateY(0px);
          -o-transform: translateY(0px);
          transform: translateY(0px);
          transform-origin: center;
          transform-box: fill-box;
        }
        50% {
          -webkit-transform: translateY(-30px);
          -o-transform: translateY(-30px);
          transform: translateY(-30px);
          transform-origin: center;
          transform-box: fill-box;
        }
        100% {
          -webkit-transform: translateY(0px);
          -o-transform: translateY(0px);
          transform: translateY(0px);
          transform-origin: center;
          transform-box: fill-box;
        }
      }
      @keyframes hospitalBigHeartss {
        0% {
          -ms-transform: translateY(-5px);
          -moz-transform: translateY(-5px);
          -webkit-transform: translateY(-5px);
          -o-transform: translateY(-5px);
          transform: translateY(-5px);
          transform-origin: center;
          transform-box: fill-box;

        }
        50% {
          -ms-transform: translateY(20px);
          -moz-transform: translateY(20px);
          -webkit-transform: translateY(20px);
          -o-transform: translateY(20px);
          transform: translateY(20px);
          transform-origin: center;
          transform-box: fill-box;
        }
        100% {
          -ms-transform: translateY(-5px);
          -moz-transform: translateY(-5px);
          -webkit-transform: translateY(-5px);
          -o-transform: translateY(-5px);
          transform: translateY(-5px);
          transform-origin: center;
          transform-box: fill-box;

        }
      }
    }


    //  style to fans


    .fan-one-main, .fan-tow-main {
      -webkit-animation: fanRotate 2s linear infinite;
      -moz-animation: fanRotate 2s linear infinite;
      -ms-animation: fanRotate 2s linear infinite;
      -o-animation: fanRotate 2s linear infinite;
      animation: fanRotate 2s linear infinite;
      @-webkit-keyframes fanRotate {
        from {
          transform-origin: center;
          transform-box: fill-box;
          -webkit-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        to {
          transform-origin: center;
          transform-box: fill-box;
          -webkit-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      @keyframes fanRotate {
        from {
          -ms-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
          -webkit-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          transform: rotate(0deg);
          transform-origin: center;
          transform-box: fill-box;
        }
        to {
          -ms-transform: rotate(360deg);
          -moz-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          transform-origin: center;
          transform-box: fill-box;
          transform: rotate(360deg);
        }
      }
    }


    // tarazou style animate
    #tarazou {
      -webkit-animation: tarazou 2s linear infinite;
      -moz-animation: tarazou 2s linear infinite;
      -ms-animation: tarazou 2s linear infinite;
      -o-animation: tarazou 2s linear infinite;
      animation: tarazou 2s linear infinite;
      @-webkit-keyframes tarazou {
        0% {
          transform-origin: center;
          transform-box: fill-box;
          -webkit-transform: rotate(-10deg);
          -o-transform: rotate(-10deg);
          transform: rotate(-10deg);
        }
        50% {
          transform-origin: center;
          transform-box: fill-box;
          -webkit-transform: rotate(10deg);
          -o-transform: rotate(10deg);
          transform: rotate(10deg);
        }
        0% {
          transform-origin: center;
          transform-box: fill-box;
          -webkit-transform: rotate(-10deg);
          -o-transform: rotate(-10deg);
          transform: rotate(-10deg);
        }
      }
      @keyframes tarazou {
        0% {
          -ms-transform: rotate(-10deg);
          -moz-transform: rotate(-10deg);
          -webkit-transform: rotate(-10deg);
          -o-transform: rotate(-10deg);
          transform: rotate(-10deg);
          transform-origin: center;
          transform-box: fill-box;
        }
        50% {
          -ms-transform: rotate(10deg);
          -moz-transform: rotate(10deg);
          -webkit-transform: rotate(10deg);
          -o-transform: rotate(10deg);
          transform-origin: center;
          transform-box: fill-box;
          transform: rotate(10deg);
        }
        100% {
          -ms-transform: rotate(-10deg);
          -moz-transform: rotate(-10deg);
          -webkit-transform: rotate(-10deg);
          -o-transform: rotate(-10deg);
          transform: rotate(-10deg);
          transform-origin: center;
          transform-box: fill-box;
        }
      }
    }


    // cheragh rahnama style

    #traffic_light {

      #red {
        animation: 5s redes infinite;
      }

      #green {
        animation: 5s greenes infinite;
      }

      #yellow {
        animation: 5s yellowes infinite;
      }

      @keyframes redes {
        0% {
          fill: red
        }
        20% {
          fill: red
        }
        40% {
          fill: red
        }
        60% {
          fill: #000
        }
        80% {
          fill: #000
        }
        100% {
          fill: #000
        }
      }

      @keyframes yellowes {
        0% {
          fill: #000
        }
        20% {
          fill: #000
        }
        40% {
          fill: yellow
        }
        50% {
          fill: #000
        }
        60% {
          fill: #000
        }
        80% {
          fill: #000
        }
        86% {
          fill: yellow
        }
        100% {
          fill: yellow
        }
      }

      @keyframes greenes {
        0% {
          fill: #000
        }
        40% {
          fill: #000
        }
        60% {
          fill: #00ff00;
        }
        80% {
          fill: #00ff00
        }
        83% {
          fill: #000
        }
        100% {
          fill: #000
        }
      }
    }


    // style for right car in accident
    #left-car-in-accident {

    }

`;

const LeftHalf = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
  position: absolute;
  right: 0;
  top: 0;
  clip-path: polygon(30% 0, 100% 0, 100% 100%, 70% 100%);


  #main-forground-this {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0px;
    top: 0px;
    -webkit-animation: backgrounMotion 400s linear infinite;
    -moz-animation: backgrounMotion 400s linear infinite;
    -ms-animation: backgrounMotion 400s linear infinite;
    -o-animation: backgrounMotion 400s linear infinite;
    float: left;
    animation: backgrounMotion 400s linear infinite;
    @-webkit-keyframes backgrounMotion {
      from {
        -ms-transform: translateX(50000px);
        -moz-transform: translateX(50000px);
        -webkit-transform: translateX(50000px);
        -o-transform: translateX(50000px);
        transform: translateX(50000px);
        transform-origin: center;
        transform-box: fill-box;
      }
      to {

        -ms-transform: translateX(0vw);
        -moz-transform: translateX(0vw);
        -webkit-transform: translateX(0vw);
        -o-transform: translateX(0vw);
        transform: translateX(0vw);
        transform-origin: center;
        transform-box: fill-box;
      }
      //100% {
      //  -ms-transform: translateY(10px);
      //  -moz-transform: translateY(10px);
      //  -webkit-transform: translateY(10px);
      //  -o-transform: translateY(10px);
      //  transform: translateY(10px);
      //  transform-origin: center;
      //  transform-box: fill-box;
      //
      //}
    }
    @keyframes backgrounMotion {
      from {


        -ms-transform: translateX(0vw);
        -moz-transform: translateX(0vw);
        -webkit-transform: translateX(0vw);
        -o-transform: translateX(0vw);
        transform: translateX(0vw);
        transform-origin: center;
        transform-box: fill-box;
      }
      to {
        -ms-transform: translateX(-50000px);
        -moz-transform: translateX(-50000px);
        -webkit-transform: translateX(-50000px);
        -o-transform: translateX(-50000px);
        transform: translateX(-50000px);
        transform-origin: center;
        transform-box: fill-box;

      }
    }

`;

const RightHalf = styled.div`
  width: 50vw;
  height: 100vh;
`;

export {
  SliderContainer,
  Background,
  Forground,
  // glasses ****
  Image,
  GlassesContainer,
  SqureGlasses,
  CircleGlasses,
  // is new
  MainContainer,
  LeftHalf,
  RightHalf,
  Loupe,
  Body,
  MainContainerLoupe,
  MainEye,
  MainContainerSqure,
  Squre,
};
