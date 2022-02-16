import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { AnimationSlider } from './commons/components/templates';
import { MainContextProvider } from './commons/services/contexts/MainContext';

export default function Home() {
  return (
    <MainContextProvider>
      <AnimationSlider />
    </MainContextProvider>
  );
}

{
  /* <img src="/assets/glasses inner.svg" /> */
  /* <SliderContainer>
    <Forground /> 
    <Background>
      <img src="/assets/glasses outer.svg" />
    </Background>
    <GlassesContainer>
      <SqureGlasses>
        <Image>
          <ImageStyle />
        </Image>
      </SqureGlasses>
      <CircleGlasses></CircleGlasses>
    </GlassesContainer>
  </SliderContainer>; */
}
