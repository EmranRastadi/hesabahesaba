import { useState, useEffect } from 'react';
import {
  Background,
  SliderContainer,
  SqureGlasses,
  GlassesContainer,
  CircleGlasses,
  // is new
  MainContainer,
  MainEye,
  Loupe,
  Body,
  MainContainerLoupe,
  Squre,
  MainContainerSqure,
} from './style';
import {
  useWindowDimensions,
  useMousePosiotn,
} from '../../../services/hooks/hook';
import { ThemeProvider } from 'styled-components';
import Image from 'next/image';
import { Loading, ShapeAnim } from '../../organism';
export default function AnimationSlider() {
  const { height, width } = useWindowDimensions();
  const { x, y } = useMousePosiotn();

  let scale = 1;

  function calScale() {
    if (resize.width > resize.height) {
      if (resize.height < 300) {
        scale = 0.8;
      } else {
        scale = 1.01;
      }
    }
  }

  function handleScale() {}

  function convertPXToVW(px) {
    return px * (100 / width);
  }

  const theme = {
    mainSlider: {
      width: width,
      height: height,
      // left: x - 150,
      // top: y - 150,
      left: 0,
      top: 0,
      loupeLeft: 7 + convertPXToVW(550),
      backgroundPosition: 150 + 'px ' + 150 + 'px',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Body>
        {/* <Loading id="loading" /> */}
        <MainContainer id="main-container">
          {/* <MainForground /> */}
        </MainContainer>
        <MainEye>
          <Squre>
            <ShapeAnim />
            <MainContainerSqure>{/* <MainForground /> */}</MainContainerSqure>
          </Squre>
          <Loupe>
            <MainContainerLoupe>{/* <MainForground /> */}</MainContainerLoupe>
          </Loupe>
        </MainEye>
      </Body>
    </ThemeProvider>
  );
}
