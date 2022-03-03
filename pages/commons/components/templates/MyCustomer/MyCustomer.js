import { Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { MainContextStore } from '../../../services/contexts/MainContext';
import GroupHandlerButton from '../../molecules/GroupHandlerButton/GroupHandlerButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { VanillaCustomerCard } from '../../organism';
import { Main } from './style';
import Image from 'next/image';
import triangle from '../../../assets/triangle.png';
import square from '../../../assets/square.png';
import ring from '../../../assets/ring.png';
import snap from '../../../assets/snap.png';
import sharif from '../../../assets/sharif.png';
import { useMousePosiotn } from '../../../services/hooks/hook';
import { ThemeProvider } from 'styled-components';
// import  ShapeAnime from "../../molecules/ShapeAnime/ShapeAnime";
import { LogoMotion, ShapeAnime, Square } from '../../molecules';
import { Shape } from '../../atoms';
import Office from '../../../assets/office.jpg';


export default function MyCustomer() {
  const hasWindow = typeof window !== 'undefined';
  const { state, dispatch } = useContext( MainContextStore );
  // const {x, y} = useMousePosiotn();
  const [ pos, setPos ] = useState( {
    width: hasWindow ? window.innerWidth : 1000,
    height: hasWindow ? window.innerHeight : 600,
  } );
  //
  useEffect( () => {
    // let nh = Math.floor(Math.random() * (window.innerHeight - 50));
    // let nw = Math.floor(Math.random() * (innerWidth - 50));
    setPos( {
      width: hasWindow ? window.innerWidth : 0,
      height: hasWindow ? window.innerHeight : 0,
    } );
  }, [] );

  const params = {
    freeMode: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      640: {
        slidesPerView: 3,
        centeredSlides: true,
      },
      780: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      },
    },
    // loop: true,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  const shapes = [ triangle, ring, square ];
  const sizes = [ 70, 80, 90, 100, 110, 60, 50 ];
  const theme = {
    customer: {
      src: Office,
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Main id={"customer"}>
        <div className={"hilight"} />
        <Typography textAlign={"center"} fontFamily={'iran-sans'} fontWeight={'bolder'} color={'#fff'} fontSize={'36px'}>مشتری
          های ما</Typography>
        <Container maxWidthXl style={{ padding: 0 }}>
          <Swiper {...params} style={{ flex: 1, height: '450px' }}>
            <SwiperSlide autoWith={true} style={{ width: 'fit-content' }}>
              {/*<Grid item lg={4} md={3} sm={2}>*/}
              <VanillaCustomerCard src={snap} title={'اسنپ'} description={'سیستم تخمین کرایه اسنپ'}/>
              {/*</Grid>*/}
            </SwiperSlide>
            <SwiperSlide autoWith={true} style={{ width: 'fit-content' }}>
              {/*<Grid item lg={4} md={3} sm={2}>*/}
              <VanillaCustomerCard src={sharif} title={'دانشگاه شریف'}
                                   description={'سیستم جامع دانشگاه شریف'}/>
              {/*</Grid>*/}
            </SwiperSlide>


          </Swiper>

        </Container>
      </Main>

    </ThemeProvider>

  );
}