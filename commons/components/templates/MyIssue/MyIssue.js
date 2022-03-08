import {Button, Container, Grid, Stack, TextField, Typography} from '@mui/material';
import {useContext} from 'react';
import {MainContextStore} from '../../../services/contexts/MainContext';
import {makeStyles, styled} from '@mui/styles';
import {useInView} from "react-intersection-observer";
import {Input as InputField} from "../../molecules";
import user from '../../../assets/user.png'
import phone from '../../../assets/phone.png'
import email from '../../../assets/email.png'
import {HandleChange} from "../../../hooks/handleChange";

const CssTextField = styled(TextField)({
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
});


const Input = styled('input')({
    display: 'none',
});
export default function MyIssue() {
    // const classes = CssTextField();
    const {input, onChange} = HandleChange()
    const {ref, inView} = useInView({
        threshold: 0.4
    })

    const useStyle = makeStyles({
        typo: {
            opacity: 0,
            transform: 'translateY(-30px)',
            transition: '1s',
        },
        typoActive: {
            opacity: 1,
            transform: 'translateY(0px)',
            transition: '1s'
        },
        input: {
            opacity: 0,
            transform: 'scale(0.7)',
            transition: '1s'
        },
        inputActive: {
            opacity: 1,
            transform: 'scale(1)',
            transition: '1s'
        },
        activeLeftButton: {
            opacity: 1,
            transform: 'translateX(0px)',
            transition: '1s'
        },
        notLeftButton: {
            opacity: 0,
            transform: 'translateX(-40px)',
            transition: '1s'
        },
        activeRightButton: {
            opacity: 1,
            transform: 'translateX(0px)',
            transition: '1s'
        },
        notRightButton: {
            opacity: 0,
            transform: 'translateX(40px)',
            transition: '1s'
        }
    })

    const classes = useStyle()

    const {state, dispatch} = useContext(MainContextStore);
    return (
        <Grid id={"contact-us"} container style={{background: '#1f1d36', padding: '100px 0', position: 'relative'}}>
            {/*<BilBilak style={{top : '-20px' ,zIndex : 999}}/>*/}
            <Container maxWidth={'md'} dir={'rtl'}>
                <Typography
                    ref={ref}
                    className={inView ? classes.typoActive : classes.typo}
                    textAlign={'center'}
                    variant={"h1"}
                    fontFamily={'iran-sans'}
                    margin={'15px 0'}
                    fontWeight={'bolder'}
                    color={'#fff'}
                    fontSize={'28px'}>تماس با ما</Typography>
                <Grid container>
                    <Grid md={6} xs={12} style={{padding: 10}}>
                        <InputField
                            placeholder={"نام و نام خانوادگی"}
                            icon={user}
                            onChange={onChange}
                            value={input?.name ?? ''}
                            name={"name"}
                        />
                    </Grid>
                    <Grid md={6} xs={12} style={{padding: 10}}>
                        <InputField
                            placeholder={"تلفن"}
                            icon={phone}
                            onChange={onChange}
                            value={input?.phone ?? ''}
                            name={"phone"}
                        />
                    </Grid>
                    <Grid xs={12} style={{padding: 10}}>
                        <InputField
                            placeholder={"ایمیل"}
                            icon={email}
                            onChange={onChange}
                            value={input?.email ?? ''}
                            name={"email"}
                        />
                    </Grid>
                    <Grid xs={12} style={{padding: 10}}>
                        <textarea
                            ref={ref}
                            className={inView ? classes.inputActive : classes.input}
                            placeholder={'نظر خود را بنویسید ...'}
                            onresize={false}
                            dir={'rtl'} id="outlined-basic"
                        />
                    </Grid>

                    <Grid ref={ref} className={inView ? classes.activeRightButton : classes.notRightButton} item md={6}
                          style={{padding: 10}}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <label htmlFor="contained-button-file">
                                <Input accept="image/*" id="contained-button-file" multiple type="file"/>
                                <Button variant="outlined" color={'warning'} component="span">
                                    انتخاب فایل
                                </Button>
                            </label>
                        </Stack>
                    </Grid>
                    <Grid item md={6} className={inView ? classes.activeLeftButton : classes.notLeftButton}
                          style={{padding: 10}}>
                        <Button variant="contained" style={{float: 'left'}}>ارسال فرم</Button>
                    </Grid>
                </Grid>
            </Container>
        </Grid>

    );
}