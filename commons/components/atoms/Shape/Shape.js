import Image from 'next/image';
import { Container } from './style';
import { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

export default function Shape({
                                x,
                                delay,
                                src,
                                width,
                                height,
                              }) {
  const theme = {
    shape: {
      width,
      height,
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <motion.div
          animate={{

            opacity: [ 0, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0 ],
            y: [ '70vh', '10vh' ],
            rotate: [ 40, 120, 30, 35, 180, 195, 200 ],
          }}

          transition={{
            type: 'spring',
            repeat: Infinity,
            duration: 15,
            delay: delay ?? 1,
            // default : {
            //   delay : delay ?? 1
            // }

          }}

          initial={{
            x: x ?? '-100px',
          }}
          className={'container'}>
          <Image width={width} height={height} src={src}/>
        </motion.div>
      </Container>
    </ThemeProvider>

  );
}