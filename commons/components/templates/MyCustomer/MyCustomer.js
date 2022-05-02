import {Container, Grid, Typography} from '@mui/material';
import {motion} from 'framer-motion';
import {useContext, useEffect, useState} from 'react';
import {MainContextStore} from '../../../services/contexts/MainContext';
import {Swiper, SwiperSlide} from 'swiper/react';
import {VanillaCustomerCard} from '../../organism';
import {Main} from './style';
import triangle from '../../../assets/triangle.png';
import square from '../../../assets/square.png';
import ring from '../../../assets/ring.png';
import snap from '../../../assets/snap.png';
import sharif from '../../../assets/sharif.png';
import {ThemeProvider} from 'styled-components';
import Office from '../../../assets/office.jpg';
import {useInView} from "react-intersection-observer";
import {makeStyles} from "@mui/styles";


export default function MyCustomer() {
    const hasWindow = typeof window !== 'undefined';
    const {state, dispatch} = useContext(MainContextStore);
    const {ref, inView} = useInView({
        threshold: 0.4
    })

    const useStyle = makeStyles({
        typo: {
            opacity: 0,
            transform: 'translateY(-30px)',
            transition: '1s',
        },
        typoActive: {
            opacity: 1,
            transform: 'translateY(0px)',
            transition: '1s'
        },
        slider : {
            opacity : 0,
            transform : 'scale(0.7)',
            transition : '2s'
        },sliderActive : {
            opacity : 1,
            transform : 'scale(1)',
            transition : '2s'
        }
    })
    // const {x, y} = useMousePosiotn();
    const [pos, setPos] = useState({
        width: hasWindow ? window.innerWidth : 1000,
        height: hasWindow ? window.innerHeight : 600,
    });
    //
    useEffect(() => {
        // let nh = Math.floor(Math.random() * (window.innerHeight - 50));
        // let nw = Math.floor(Math.random() * (innerWidth - 50));
        setPos({
            width: hasWindow ? window.innerWidth : 0,
            height: hasWindow ? window.innerHeight : 0,
        });
    }, []);

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
    const classes = useStyle()
    const shapes = [triangle, ring, square];
    const sizes = [70, 80, 90, 100, 110, 60, 50];
    const theme = {
        customer: {
            src: Office,
        },
    };
    return (
        <ThemeProvider theme={theme}>
            <Main id={"customer"}>
                <div className={"hilight"}/>
                <Typography ref={ref}
                            className={inView ? classes.typoActive : classes.typo}
                            textAlign={"center"}
                            fontFamily={'iran-sans'}
                            variant={"h1"}
                            fontWeight={'bolder'}
                            color={'#fff'}
                            fontSize={'28px'}
                            padding={"15px 0"}
                >مشتری
                    های ما</Typography>
                <Container ref={ref}
                           className={inView ? classes.sliderActive : classes.slider}
                           maxWidthXl style={{padding: 0}}>
                    <Swiper {...params} style={{flex: 1, height: '360px'}}>
                        <SwiperSlide autoWith={true} style={{width: 'fit-content'}}>
                            {/*<Grid item lg={4} md={3} sm={2}>*/}
                            <VanillaCustomerCard src={snap} title={'اسنپ'} description={'سیستم تخمین کرایه اسنپ'}/>
                            {/*</Grid>*/}
                        </SwiperSlide>
                        <SwiperSlide autoWith={true} style={{width: 'fit-content'}}>
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