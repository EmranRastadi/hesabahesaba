import {Button, Container, Grid, Stack, TextField, Typography} from "@mui/material";
import {motion} from "framer-motion";
import {useContext} from "react";
import {MainContextStore} from "../../../services/contexts/MainContext";
import GroupHandlerButton from "../../molecules/GroupHandlerButton/GroupHandlerButton";
import {makeStyles, styled} from "@mui/styles";

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
        borderBottomColor: 'green',
        fontFamily: 'iran-sans',
    },
    '& .MuiOutlinedInput-root': {
        color: '#fff',
        fontFamily: 'iran-sans',
        '& fieldset': {
            borderColor: '#fff',
            color: '#fff'
        },
        '&:hover fieldset': {
            borderColor: 'green',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});


const useStyles = makeStyles({
    root: {

        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: 'hsla(0,0%,100%,.7)',

        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'hsla(0,0%,100%,.7)',

        },

        '&:hover .MuiOutlinedInput-input': {
            color: 'hsla(0,0%,100%,.7)',

        },
        '& .MuiOutlinedInput-input': {
            color: 'hsla(0,0%,100%,.7)',

        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
            color: 'hsla(0,0%,100%,.7)',

        },
        '& .MuiInputLabel-outlined': {
            color: 'hsla(0,0%,100%,.7)',
        },
        '&:hover .MuiInputLabel-outlined': {
            color: 'hsla(0,0%,100%,.7)',

        },
        '& .MuiInputLabel-outlined.Mui-focused': {
            color: 'hsla(0,0%,100%,.7)',

        },
    },
})

const Input = styled('input')({
    display: 'none',
});
export default function MyIssue() {
    const classes = useStyles();
    const {state, dispatch} = useContext(MainContextStore)
    return (
        <motion.div

            animate={{
                // y:  state.pageActive === 2 ? 0 : 400,
                opacity: state.pageActive === 2 ? 1 : 0,
                zIndex: state.pageActive === 2 ? 9 : -1,
            }}
            transition={{
                type: 'spring',
                stiffness: 60
            }}
            initial={{
                opacity: 0
                // y :  state.pageActive === 2 ? 400 : 0
            }}
            style={{
                width: '100%',
                height: '100vh',
                top: 0,
                display: 'flex',
                alignItems: 'center',
                left: 0,
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'fixed',
                background: 'rgba(0 0 0 / 70%)'
            }}>
            <Typography style={{
                fontFamily: 'iran-sans',
                fontWeight: 'bolder',
                color: '#fff',
                fontSize: '36px'
            }}>تماس با ما</Typography><br/><br/>
            <Container zeroMinWidth maxWidth={"md"} dir={"rtl"}>
                <Grid container spacing={4}>
                    <Grid md={6} xs={12} style={{padding: 10}}>
                        <TextField
                            className={classes.root}
                            style={{fontFamily: 'iran-sans',}}
                            dir={"rtl"} color={"success"} fullWidth id="outlined-basic" label="نام" variant="outlined"/>
                    </Grid>
                    <Grid md={6} xs={12} style={{padding: 10}}>
                        <TextField
                            className={classes.root}
                            dir={"rtl"} color={"success"} fullWidth id="outlined-basic" label="نام خانوادگی"
                            variant="outlined"/>
                    </Grid>
                    <Grid xs={12} style={{padding: 10}}>
                        <TextField
                            className={classes.root}
                            dir={"rtl"} color={"success"} fullWidth id="outlined-basic" label="ایمیل"
                            variant="outlined"/>
                    </Grid>
                    <Grid xs={12} style={{padding: 10}}>
                        <textarea
                            className={classes.root}
                            placeholder={"نظر خود را بنویسید ..."}
                            onresize={false}
                            dir={"rtl"} color={"success"} fullWidth id="outlined-basic" label="ایمیل"
                            variant="outlined"/>
                    </Grid>

                    <Grid item md={6} xs={12} style={{padding : 10}}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <label htmlFor="contained-button-file">
                                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                <Button variant="outlined" color={"warning"} component="span">
                                    انتخاب فایل
                                </Button>
                            </label>
                        </Stack>
                    </Grid>
                    <Grid item md={6} xs={12} style={{padding : 10}}>
                        <Button variant="contained" style={{float : "left"}}>ارسال فرم</Button>
                    </Grid>
                </Grid>


            </Container>
        </motion.div>
    )
}