import {useEffect, useState} from 'react';
import {AnimationSlider, MyCustomer, MyIssue} from './commons/components/templates';
import {MainContextProvider} from './commons/services/contexts/MainContext';
import GroupHandlerButton from "./commons/components/molecules/GroupHandlerButton/GroupHandlerButton";
import {LogoMotion, Menu} from "./commons/components/molecules";
import {create} from 'jss';
import rtl from 'jss-rtl';
import {StylesProvider, jssPreset} from '@mui/styles';

import {createTheme, ThemeProvider} from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import {prefixer} from 'stylis';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import {Loading, Navbar} from "./commons/components/organism";
import NavBar from "./commons/components/organism/NavBar/NavBar";

const theme = createTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});


// Configure JSS
const jss = create({
    plugins: [...jssPreset().plugins, rtl()],
});
export default function Home() {
    const [isShowAnim, setIsShowAnim] = useState({
        slider: true,
        customer: false
    })

    const theme = createTheme({
        direction: 'rtl',

    });
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <div dir="rtl">
                    <MainContextProvider>
                        {/*<Loading />*/}
                        {/*<LogoMotion/>*/}
                        <Navbar />
                        <AnimationSlider
                            isAnim={isShowAnim}
                            setAnim={setIsShowAnim}
                            // onClick={()=> setIsShowAnim({...isShowAnim , slider: })}
                        />
                        <MyCustomer/>
                        <MyIssue/>
                        {/*<GroupHandlerButton/>*/}

                    </MainContextProvider>

                    <Menu />
                </div>
            </ThemeProvider>
        </CacheProvider>
    )
        ;
}