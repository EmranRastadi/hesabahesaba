import {Container, Grid, Typography} from "@mui/material";
import {motion} from "framer-motion";
import {useContext, useEffect, useState} from "react";
import {MainContextStore} from "../../../services/contexts/MainContext";
import GroupHandlerButton from "../../molecules/GroupHandlerButton/GroupHandlerButton";
import {Swiper, SwiperSlide} from 'swiper/react';
import {VanillaCustomerCard} from "../../organism";
import {Main} from "./style";
import Image from 'next/image';
import triangle from '../../../assets/triangle.png'
import square from '../../../assets/square.png'
import ring from '../../../assets/ring.png'
import snap from '../../../assets/snap.png'
import sharif from '../../../assets/sharif.png'
import {useMousePosiotn} from "../../../services/hooks/hook";
import {ThemeProvider} from "styled-components";
// import  ShapeAnime from "../../molecules/ShapeAnime/ShapeAnime";
import {LogoMotion, ShapeAnime, Square} from "../../molecules";


export default function MyCustomer() {
    const hasWindow = typeof window !== 'undefined';
    const {state, dispatch} = useContext(MainContextStore)
    // const {x, y} = useMousePosiotn();
    const [pos, setPos] = useState({
        width: hasWindow ? window.innerWidth : 1000,
        height: hasWindow ? window.innerHeight : 600
    })
    //
    useEffect(() => {
        // let nh = Math.floor(Math.random() * (window.innerHeight - 50));
        // let nw = Math.floor(Math.random() * (innerWidth - 50));
            setPos({
                width: hasWindow ? window.innerWidth : 0,
                height: hasWindow ? window.innerHeight : 0
            })
    },[])

    const params = {
        freeMode: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        centeredSlides: true,
        breakpoints: {
            640: {
                slidesPerView: 3,
                centeredSlides: true
            },
            780: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 5
            }
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



    return (
            <Main>
                <motion.div
                    animate={{
                        // y: state.pageActive === 1 ? 0 : 400,
                        opacity: state.pageActive === 1 ? 1 : 0,
                        zIndex: state.pageActive === 1 ? 9 : -1,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 60
                    }}
                    initial={{
                        // y: state.pageActive === 1 ? 400 : 0
                        opacity :0
                    }}
                    className={"luncher"}
                >

                    {/*<Square*/}
                    {/*    width={60}*/}
                    {/*    height={60}*/}
                    {/*    delay={2}*/}
                    {/*    left={pos.width - ( ( pos.width * 0.7))}*/}
                    {/*/>*/}

                    {/*<Square*/}
                    {/*    width={110}*/}
                    {/*    height={110}*/}
                    {/*    delay={5}*/}
                    {/*    left={pos.width - (Math.random() * ( pos.width - 0.7))}*/}
                    {/*/>*/}

                    {/*<Square*/}
                    {/*    width={110}*/}
                    {/*    delay={1}*/}
                    {/*    height={110}*/}
                    {/*    left={pos.width - (Math.random() * ( pos.width - 0.7))}*/}
                    {/*/>*/}


                    <Typography fontFamily={"iran-sans"} fontWeight={"bolder"} color={"#fff"} fontSize={"36px"}>مشتری
                        های ما</Typography>

                    <div className={"animationContainer"}>


                        {/*                      <ShapeAnime width={pos.width} src={square} height={pos.height} shapeH={100} shapeW={100}*/}
                        {/*                                  delay={7} duration={5}/>*/}
                        {/*                      <ShapeAnime width={pos.width} src={ring} height={pos.height} shapeH={60} shapeW={60} delay={2}*/}
                        {/*                                  duration={5}/>*/}
                        {/*                      <ShapeAnime width={pos.width} height={pos.height} shapeH={60} shapeW={60} src={triangle}*/}
                        {/*                                  delay={10} duration={5}/>*/}
                        {/*                      <ShapeAnime width={pos.width} src={square} height={pos.height} shapeH={60} shapeW={60}*/}
                        {/*                                  delay={10} duration={5}/>*/}
                        {/*                      <ShapeAnime width={pos.width} src={ring} height={pos.height} shapeH={50} shapeW={50} delay={4}*/}
                        {/*                                  duration={5}/>*/}
                        {/*                      <ShapeAnime width={pos.width} src={triangle} height={pos.height} shapeH={70} shapeW={70}*/}
                        {/*                                  delay={4}*/}
                        {/*                                  duration={5}/>*/}
                        {/*                      <ShapeAnime width={pos.width} src={square} height={pos.height} shapeH={60} shapeW={60}*/}
                        {/*                                  delay={10} duration={5}/>*/}
                        {/*                      <ShapeAnime width={pos.width} src={ring} height={pos.height} shapeH={100} shapeW={100} delay={4}*/}
                        {/*                                  duration={5}/>*/}
                        {/*                      <ShapeAnime width={pos.width} src={triangle} height={pos.height} shapeH={80} shapeW={80}*/}
                        {/*                                  delay={4}*/}
                        {/*                                  duration={5}/>*/}
                        {/*<ShapeAnime width={pos.width} src={square} height={pos.height} shapeH={100} shapeW={100}*/}
                        {/*                                  delay={7} duration={5}/>*/}
                        {/*                      <ShapeAnime width={pos.width} src={ring} height={pos.height} shapeH={60} shapeW={60} delay={2}*/}
                        {/*                                  duration={5}/>*/}
                        {/*                      <ShapeAnime width={pos.width} height={pos.height} shapeH={60} shapeW={60} src={triangle}*/}
                        {/*                                  delay={10} duration={5}/>*/}
                        {/*                      <ShapeAnime width={pos.width} src={square} height={pos.height} shapeH={60} shapeW={60}*/}
                        {/*                                  delay={10} duration={5}/>*/}
                        {/*                      <ShapeAnime width={pos.width} src={ring} height={pos.height} shapeH={50} shapeW={50} delay={4}*/}
                        {/*                                  duration={5}/>*/}
                        {/*                      <ShapeAnime width={pos.width} src={triangle} height={pos.height} shapeH={70} shapeW={70}*/}
                        {/*                                  delay={4}*/}
                        {/*                                  duration={5}/>*/}
                        {/*                      <ShapeAnime width={pos.width} src={square} height={pos.height} shapeH={60} shapeW={60}*/}
                        {/*                                  delay={10} duration={5}/>*/}
                        {/*                      <ShapeAnime width={pos.width} src={ring} height={pos.height} shapeH={100} shapeW={100} delay={4}*/}
                        {/*                                  duration={5}/>*/}
                        {/*                      <ShapeAnime width={pos.width} src={triangle} height={pos.height} shapeH={80} shapeW={80}*/}
                        {/*                                  delay={4}*/}
                        {/*                                  duration={5}/>*/}

                        {/*<ShapeAnime width={pos.width} height={pos.height} src={square} duration={8} rotateZarib={5}/>*/}
                        {/*<ShapeAnime width={pos.width * 1.1} height={pos.height} src={triangle} duration={6}*/}
                        {/*            rotateZarib={5} delay={3}/>*/}
                        {/*<ShapeAnime width={pos.width} height={pos.height} src={square} duration={9} delay={5}*/}
                        {/*            rotateZarib={7}/>*/}
                        {/*<ShapeAnime width={pos.width} height={pos.height} src={ring} duration={6} rotateZarib={5}*/}
                        {/*            delay={3}/>*/}
                        {/*<ShapeAnime width={pos.width * 1.3} height={pos.height} src={square} duration={8} delay={1}*/}
                        {/*            rotateZarib={5}/>*/}
                        {/*<ShapeAnime width={pos.width} height={pos.height} src={ring} duration={9} delay={5}*/}
                        {/*            rotateZarib={7}/>*/}
                        {/*<ShapeAnime width={pos.width * 1.5} height={pos.height} src={triangle} duration={9} delay={5}*/}
                        {/*            rotateZarib={7}/>*/}
                        {/*<ShapeAnime width={pos.width} height={pos.height} src={square} duration={9} delay={5}*/}
                        {/*            rotateZarib={7}/>*/}
                        {/*<ShapeAnime width={pos.width} height={pos.height} src={ring} rotateZarib={5} duration={5}*/}
                        {/*            delay={2}/>*/}
                        {/*<ShapeAnime width={pos.width * 1.4} height={pos.height} src={triangle} duration={9} delay={5}*/}
                        {/*            rotateZarib={7}/>*/}


                    </div>


                    <Container maxWidthXl style={{padding: 0}}>
                        <Swiper {...params} style={{flex: 1, height: '450px'}}>
                            <SwiperSlide autoWith={true} style={{width: 'fit-content'}}>
                                {/*<Grid item lg={4} md={3} sm={2}>*/}
                                <VanillaCustomerCard src={snap} title={"اسنپ"} description={"سیستم تخمین کرایه اسنپ"}/>
                                {/*</Grid>*/}
                            </SwiperSlide>
                            <SwiperSlide autoWith={true} style={{width: 'fit-content'}}>
                                {/*<Grid item lg={4} md={3} sm={2}>*/}
                                <VanillaCustomerCard src={sharif} title={"دانشگاه شریف"}
                                                     description={"سیستم جامع دانشگاه شریف"}/>
                                {/*</Grid>*/}
                            </SwiperSlide>


                        </Swiper>

                    </Container>
                </motion.div>
            </Main>

    )
}