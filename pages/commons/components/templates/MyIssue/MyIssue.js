import {Container, Grid, TextField, Typography} from "@mui/material";
import {motion} from "framer-motion";
import {useContext} from "react";
import {MainContextStore} from "../../../services/contexts/MainContext";
import GroupHandlerButton from "../../molecules/GroupHandlerButton/GroupHandlerButton";
import {makeStyles, styled} from "@mui/styles";


const useStyles = makeStyles(theme => ({
    root: {
        "& label": {
            width: "100%",
            textAlign: "center",
            transformOrigin: "center",
            "&.Mui-focused": {
                transformOrigin: "center"
            }
        }
    }
}));

const CssTextField = styled(TextField)({
    root: {
        fontFamily : 'iran-sans',
        "& label": {
            width: "100%",
            textAlign: "center",
            transformOrigin: "center",
            "&.Mui-focused": {
                transformOrigin: "center"
            }
        }
    },
    '& label.Mui-focused': {
        color: '#fff',
        fontFamily : 'iran-sans',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
        fontFamily : 'iran-sans',
    },
    '& .MuiOutlinedInput-root': {
        color :'#fff',
        fontFamily : 'iran-sans',
        '& fieldset': {
            borderColor: '#fff',
            color:'#fff'
        },
        '&:hover fieldset': {
            borderColor: 'green',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
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
                display : 'flex',
                alignItems : 'center',
                left: 0,
                flexDirection : 'column',
                justifyContent : 'center',
                position: 'fixed',
                background: 'rgba(0 0 0 / 70%)'
            }}>
            <Typography style={{fontFamily : 'iran-sans',
                fontWeight: 'bolder',
                color: '#fff',
                fontSize: '36px'
            }}>تماس با ما</Typography><br /><br />
            <Container zeroMinWidth maxWidth={"sm"} dir={"rtl"}>
                <Grid container spacing={3}>
                    <Grid md={6}  xs={12} style={{padding : 5}}>
                        <CssTextField
style={{fontFamily : 'iran-sans',}}
                            dir={"rtl"} color={"success"} fullWidth id="outlined-basic" label="نام" variant="outlined"/>
                    </Grid>
                    <Grid md={6} xs={12} style={{padding : 5}}>
                        <CssTextField

                            dir={"rtl"} color={"success"} fullWidth id="outlined-basic" label="نام خانوادگی" variant="outlined"/>
                    </Grid>
                    <Grid xs={12} style={{padding : 5}}>
                        <CssTextField

                            dir={"rtl"} color={"success"} fullWidth id="outlined-basic" label="ایمیل" variant="outlined"/>
                    </Grid>
                </Grid>


            </Container>
        </motion.div>
    )
}