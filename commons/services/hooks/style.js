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
  height: 100vh;
  position: relative;
  overflow: hidden;
  // transform: rotate(-45deg);
  img {
    // opacity: 0.3;
    background-image: url(assets/glasses-inner.svg);
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
  width: 6000px;
  height: 100vh;
  background-image: url(assets/glasses-outer.svg);
  background-size: 6000px auto;
`;

const Loupe = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 200px;
  position: absolute;
  top: ${(props) => props?.theme?.mainSlider?.top}px;
  left: ${(props) => props?.theme?.mainSlider?.left}px;
  background-image: url(assets/glasses-inner.svg);
  border: 2px solid #fff;
  background-size: 6000px auto;
  background-position: ${(props) =>
    props?.theme?.mainSlider?.backgroundPosition};
  // position: absolute;
  // // background-image: url(assets/glasses-inner.svg);
  // background-position: center;
  // background-repeat: no-repeat;
  // width: 100%;
  // height: 100%;
  // // background-attachment: ;
  // background-size: cover;
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
  Loupe,
};
