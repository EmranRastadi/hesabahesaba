import {
  Circle, Container, Luncher, Square, MenuItem,
} from './style';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { scroller } from 'react-scroll';
// import { FcAdvertising, FcCustomerSupport, FcShop } from 'react-icons/all';

export default function Menu() {
  const el = useRef();
  const q = gsap.utils.selector( el );
  const [ reversed, setReversed ] = useState( false );

  const tl = useRef();
  useEffect( () => {
    tl.current = gsap.timeline()
      .to( q( '.SolutionsMenu' ), {
        x: 100,
      } )
      .to( q( '.Industry' ), {
        x: 45,
        y: -95,
      } ).to( q( '.Customers' ), {
        rotate: 360,
      } )
      .to( q( '.ContactUs' ), {
        x: 100,
      } );

  }, [] );


  useEffect( () => {
    // toggle the direction of our timeline
    tl.current.reversed( reversed );
  }, [ reversed ] );


  function scrollToDown(target) {
    scroller.scrollTo( target, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    } );
  }

  return (
    <Container>
      <Luncher onClick={() => setReversed( !reversed )}>
        <Circle className={reversed ? 'active' : ''}/>
        <Square className={reversed ? 'active' : ''}/>
      </Luncher>
      <motion.div
        onClick={() => scrollToDown( 'industry' )}
        whileHover={{
          scale: 1.1,
        }}
        animate={{
          x: reversed ? 60 : -85,
          y: reversed ? 0 : -20,
        }}
        transition={{
          default: {
            // delay : 0
          },
        }}
        className={'menu-item SolutionsMenu'}>
        {/*<FcAdvertising  />*/}
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          animationDelay: 0,

        }}
        animate={{
          x: reversed ? 35 : -85,
          y: reversed ? -80 : -20,
        }}
        transition={{
          // delay : 0.2,
          default: {
            // delay : 0.2
          },
        }}
        className={'menu-item Industry'}>
      </motion.div>
      <motion.div
        onClick={() => scrollToDown( 'customer' )}
        whileHover={{
          animationDelay: 0,
          scale: 1.1,
        }}
        animate={{
          x: reversed ? -30 : -85,
          y: reversed ? -140 : -20,
        }}
        transition={{
          // delay : 0.3,
          // delayChildren : 0.3,
          default: {
            // delay : 0.3
          },
        }}
        className={'menu-item Customers'}>
        {/*<FcShop  />*/}
      </motion.div>
      <motion.div
        onClick={() => scrollToDown( 'contact-us' )}
        whileHover={{
          scale: 1.1,
          animationDelay: 0,

        }}
        animate={{
          x: reversed ? -115 : -85,
          y: reversed ? -155 : -20,
        }}
        transition={{
          // delay : 0.4,
          // delayChildren : 0.4,

          default: {
            // delay : 0.4
          },
        }}
        className={'menu-item ContactUs'}>
        {/*<FcCustomerSupport  />*/}
      </motion.div>
    </Container>
  );
}