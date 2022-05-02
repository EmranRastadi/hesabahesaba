import {useState, useEffect, useContext} from 'react';
import {
    Body,
    LeftHalf,
} from './style';
import { scroller } from "react-scroll";

import {
    useWindowDimensions,
} from '../../../services/hooks/hook';
import {ThemeProvider} from 'styled-components';
import BackgroundGlouther from "./BackgroundGlouther";
import Forground from "./Forground";
import { AbsoluteLogo, BilBilak } from '../../atoms';

export default function AnimationSlider() {
    const {height, width} = useWindowDimensions();

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
                <AbsoluteLogo />
                <div id={"main-background-this"}>
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
                    </div>

                </LeftHalf>


                <BilBilak onClick={scrollToDown} />

            </Body>

        </ThemeProvider>
    );
}
