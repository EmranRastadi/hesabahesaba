import { Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import { useContext } from 'react';
import { MainContextStore } from '../../../services/contexts/MainContext';
import { styled } from '@mui/styles';

const CssTextField = styled( TextField )( {
  '& label': {
    color: '#fff',
    float: 'right',
    fontFamily: 'iran-sans',
  }, '& label.Mui-focused': {
    color: '#fff',
    fontFamily: 'iran-sans',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#f25461',
    fontFamily: 'iran-sans',
  },
  '& .MuiOutlinedInput-root': {
    color: '#fff',
    fontFamily: 'iran-sans',
    '& fieldset': {
      borderColor: '#fff',
      color: '#fff',
    },
    '&:hover fieldset': {
      borderColor: '#f25461',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#f25461',
    },
  },
} );


const Input = styled( 'input' )( {
  display: 'none',
} );
export default function MyIssue() {
  // const classes = CssTextField();


  const { state, dispatch } = useContext( MainContextStore );
  return (
    <Grid id={"contact-us"} container style={{ background: '#1f1d36', padding: '100px 0', position: 'relative' }}>
      {/*<BilBilak style={{top : '-20px' ,zIndex : 999}}/>*/}
      <Container maxWidth={'md'} dir={'rtl'}>
        <Typography textAlign={'center'} fontFamily={'iran-sans'} margin={'15px 0'} fontWeight={'bolder'} color={'#fff'}
                    fontSize={'36px'}>تماس با ما</Typography>
        <Grid container>
          <Grid md={6} xs={12} style={{ padding: 10 }}>
            <CssTextField
              // className={classes.root}
              style={{ fontFamily: 'iran-sans' }}
              dir={'rtl'} fullWidth id="outlined-basic" label="نام" variant="outlined"/>
          </Grid>
          <Grid md={6} xs={12} style={{ padding: 10 }}>
            <CssTextField
              // className={classes.root}
              dir={'rtl'} fullWidth id="outlined-basic" label="نام خانوادگی"
              variant="outlined"/>
          </Grid>
          <Grid xs={12} style={{ padding: 10 }}>
            <CssTextField
              // className={classes.root}
              dir={'rtl'} fullWidth id="outlined-basic" label="ایمیل"
              variant="outlined"/>
          </Grid>
          <Grid xs={12} style={{ padding: 10 }}>
                        <textarea
                          placeholder={'نظر خود را بنویسید ...'}
                          onresize={false}
                          dir={'rtl'} id="outlined-basic"
                        />
          </Grid>

          <Grid item md={6} xs={12} style={{ padding: 10 }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file"/>
                <Button variant="outlined" color={'warning'} component="span">
                  انتخاب فایل
                </Button>
              </label>
            </Stack>
          </Grid>
          <Grid item md={6} xs={12} style={{ padding: 10 }}>
            <Button variant="contained" style={{ float: 'left' }}>ارسال فرم</Button>
          </Grid>
        </Grid>
      </Container>
    </Grid>

  );
}