import Head from 'next/head';
import {useEffect, useState} from 'react';
import styles from '../styles/Home.module.css';
import {AnimationSlider, MyCustomer, MyIssue} from './commons/components/templates';
import {MainContextProvider} from './commons/services/contexts/MainContext';
import GroupHandlerButton from "./commons/components/molecules/GroupHandlerButton/GroupHandlerButton";
import {Container} from "@mui/material";
import {Loading} from "./commons/components/organism";
import {LogoMotion} from "./commons/components/molecules";

export default function Home() {
    const [isShowAnim , setIsShowAnim] = useState({
        slider : true,
        customer : false
    })
    return (
        <MainContextProvider>
            {/*<Loading />*/}

            <LogoMotion/>

            <AnimationSlider
                    isAnim={isShowAnim}
                    setAnim={setIsShowAnim}
                    // onClick={()=> setIsShowAnim({...isShowAnim , slider: })}
                />
                <MyCustomer/>
                <MyIssue />

                <GroupHandlerButton  />

        </MainContextProvider>
    );
}