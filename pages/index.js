
import {  useState } from 'react';
import { MainContextProvider } from '../commons/services/contexts/MainContext';

import { create } from 'jss';
import rtl from 'jss-rtl';
import {  jssPreset } from '@mui/styles';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { Luncher } from '../commons/components/DesingPages';


const theme = createTheme( {
  direction: 'rtl', // Both here and <body dir="rtl">
} );
// Create rtl cache
const cacheRtl = createCache( {
  key: 'muirtl',
  stylisPlugins: [ prefixer, rtlPlugin ],
} );


// Configure JSS
const jss = create( {
  plugins: [ ...jssPreset().plugins, rtl() ],
} );
export default function Home() {
  const [ isShowAnim, setIsShowAnim ] = useState( {
    slider: true,
    customer: false,
  } );

  const theme = createTheme( {
    direction: 'rtl',

  } );
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir="rtl">
          <MainContextProvider>
            <Luncher />
          </MainContextProvider>
        </div>
      </ThemeProvider>
    </CacheProvider>
  )
    ;
}