import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { Style } from './style';
import { useInView } from 'react-intersection-observer';
import { makeStyles } from '@mui/styles';


export default function LuncherCard({
                                      flip,
                                      title,
                                      desc,
                                      src,
                                    }) {
  function _renderContent() {
    const { ref, inView } = useInView( {
      threshold: 0.5,
    } );
    const useStyles = makeStyles( {
      card: {
        transform: flip ? 'translateX(220px) rotate(15deg)' : 'translateX(-220px) rotate(-15deg)',
        opacity: 0,
        transition: '2s',
      },
      activeCard: {
        transform: 'translateX(0px) rotate(0deg)',
        opacity: 1,
        transition: '2s',
      },
      typo: {
        opacity: 0,
        transform: flip ? 'translateX(-60px)' : 'translateX(60px)',
        transition: '2s',
      },
      activeTypo: {
        opacity: 1,
        transform: 'translateX(0px)',
        transition: '2s',
      },
      desc: {
        opacity: 0,
        transform: flip ? 'translateX(-60px)' : 'translateX(60px)',
        transition: '1s',
        transitionDelay: '0.5s',

      },
      activeDesc: {
        opacity: 1,
        transform: 'translateX(0px)',
        transition: '1s',
        transitionDelay: '0.5s',


      },
    } );
    const classes = useStyles();
    if ( flip ) {
      return (
        <>
          <Grid
            ref={ref}
            className={inView ? classes.activeCard : classes.card}
            item md={'7'} xs={'12'}>
            <div style={{
              boxShadow: 'rgb(64 62 120) 0px 0px 83px 3px',
              borderRadius: '5px',
              overflow: 'hidden',
            }}>
              <Image src={src}/>
            </div>
          </Grid>
          <Grid item md={'5'} xs={'12'} ref={ref}>
            <Typography
              className={inView ? classes.activeTypo : classes.typo}
              color={'#fff'}
              fontFamily={'iran-sans'}
              fontSize={'26px'}
              fontWeight={800}
            >{title}</Typography>
            <Typography
              className={inView ? classes.activeDesc : classes.desc}
              color={'#ccc'}
              textAlign={'justify'}
              fontFamily={'iran-sans'}
            >{desc}</Typography>
          </Grid>
        </>
      );
    } else {
      return (
        <>
          <Grid item md={'5'} xs={'12'}>
            <Typography
              className={inView ? classes.activeTypo : classes.typo}
              color={'#fff'}
              fontFamily={'iran-sans'}
              fontSize={'26px'}
              fontWeight={800}
            >{title}</Typography>
            <Typography
              className={inView ? classes.activeDesc : classes.desc}
              color={'#ccc'}
              textAlign={'justify'}
              fontFamily={'iran-sans'}
            >{desc}</Typography>
          </Grid>
          <Grid
            ref={ref}
            className={inView ? classes.activeCard : classes.card}
            item md={'7'} xs={'12'}
          >
            <div style={{
              boxShadow: 'rgb(64 62 120) 0px 0px 83px 3px',
              borderRadius: '5px',
              overflow: 'hidden',
            }}>
              <Image style={{ borderRadius: '10px !important', overflow: 'hidden' }} src={src}/>
            </div>
          </Grid>
        </>
      );
    }
  }

  return _renderContent();
}