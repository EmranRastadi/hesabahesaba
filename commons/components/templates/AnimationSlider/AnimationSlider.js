import {useState, useEffect, useContext} from 'react';
import {
    Body,
    Squre,
    MainContainerSqure,
    LeftHalf,
} from './style';
import { scroller } from "react-scroll";

import {
    useWindowDimensions,
} from '../../../services/hooks/hook';
import {ThemeProvider} from 'styled-components';
import {MainContextStore} from "../../../services/contexts/MainContext";
import BackgroundGlouther from "./BackgroundGlouther";
import {motion} from 'framer-motion'
import Forground from "./Forground";
import { Logo } from '../../molecules';
import { AbsoluteLogo, BilBilak } from '../../atoms';
import {Loading} from "../../organism";

export default function AnimationSlider() {
    const {height, width} = useWindowDimensions();
    const {state, dispatch} = useContext(MainContextStore)
    const [arrSplash, setArrSplash] = useState([])

    function convertPXToVW(px) {
        return px * (100 / width);
    }

    const theme = {
        mainSlider: {
            width: width ? width + "px" : '100vw',
            height: height,
            // left: x - 150,
            // top: y - 150,
            left: 0,
            top: 0,
            loupeLeft: 7 + convertPXToVW(550),
            backgroundPosition: 150 + 'px ' + 150 + 'px',
        },
    };

    useEffect(() => {
        _renderSlash()
    }, [])

    function _renderSlash() {
        let splashClone = [...arrSplash]
        let i;
        for (i = 0; i < 20; i++) {
            splashClone.push(
                <Squre style={{left: (i * 25) + "px"}}>
                    <MainContainerSqure>{/* <MainForground /> */}</MainContainerSqure>
                </Squre>
            )
        }
        setArrSplash(splashClone)
    }

    function scrollToDown(){
        scroller.scrollTo("industry", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    }

    return (
        <ThemeProvider theme={theme}>
            <Body id={"slider"}>
                {/*<Loading />*/}

                <AbsoluteLogo />
                <div id={"main-background-this"}>
                    <BackgroundGlouther/>
                    <BackgroundGlouther/>
                    <BackgroundGlouther/>
                    <BackgroundGlouther/>
                    <BackgroundGlouther/>
                    <BackgroundGlouther/>
                    <BackgroundGlouther/>
                    <BackgroundGlouther/>
                    <BackgroundGlouther/>
                    <BackgroundGlouther/>
                    <BackgroundGlouther/>
                    <BackgroundGlouther/>
                    <BackgroundGlouther/>
                </div>


                <LeftHalf>
                    <div id={"main-forground-this"}>
                        <Forground/>
                        <Forground/>
                        <Forground/>
                        <Forground/>
                        <Forground/>
                        <Forground/>
                        <Forground/>
                        <Forground/>
                        <Forground/>
                        <Forground/>
                        <Forground/>
                        <Forground/>
                        <Forground/>
                    </div>

                </LeftHalf>


                <BilBilak onClick={scrollToDown} />

            </Body>

            {/*    <motion.div*/}
            {/*        className={"bodyShadow"}*/}
            {/*        animate={{*/}
            {/*            y: state.pageActive === 0 ? 0 : 400,*/}
            {/*            opacity: state.pageActive === 0 ? 1 : 0,*/}
            {/*            zIndex: state.pageActive === 0 ? 9 : -1*/}
            {/*        }}*/}
            {/*        transition={{*/}
            {/*            type: 'spring',*/}
            {/*            stiffness: 60*/}
            {/*        }}*/}
            {/*        initial={{*/}
            {/*            y: state.pageActive === 0 ? 400 : 0*/}
            {/*        }}*/}
            {/*    >*/}


            {/*        /!*<Loading id="loading"/>*!/*/}
            {/*        <MainContainer id="main-container">*/}
            {/*            /!* <MainForground /> *!/*/}
            {/*        </MainContainer>*/}

            {/*        <MainEye>*/}
            {/*            <Squre>*/}
            {/*                <ShapeAnim/>*/}
            {/*                <MainContainerSqure>/!* <MainForground /> *!/</MainContainerSqure>*/}
            {/*            </Squre>*/}

            {/*            /!*<Loupe>*!/*/}
            {/*            /!*    <ShapeAnim/>*!/*/}
            {/*            /!*    <MainContainerLoupe>/!* <MainForground /> *!/</MainContainerLoupe>*!/*/}
            {/*            /!*</Loupe>*!/*/}
            {/*        </MainEye>*/}

            {/*        /!*<TowCar/>*!/*/}

            {/*        /!*<GroupHandlerButton/>*!/*/}
            {/*    </motion.div>*/}
            {/*</Body>*/}


        </ThemeProvider>
    );
}
