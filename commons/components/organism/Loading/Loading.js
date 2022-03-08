import {Container, Main, Squre, Circle} from './style';
import {motion} from 'framer-motion';
import {Button, Typography} from "@mui/material";
// import {IoIosArrowBack} from "react-icons/io";

export default function Loading(props) {
    return (
        <Container {...props}>
            <Main>
                <motion.div
                    className={"square"}
                    animate={{
                        y : -30,
                        x: -55,
                        rotate: "-180deg",
                        scale : 1.2,
                        borderRadius: "100%"
                    }}
                    transition={{
                        delay: 1,
                        type: 'spring',
                        stiffness: 60,
                        duration: 1.5
                    }}
                    initial={{
                        y : 0,
                        x: 0,
                        rotate: "15deg",
                        radius: '10%',
                        scale : 0.9
                    }}
                >
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </motion.div>

                <motion.div

                    animate={{
                        y : 18,
                        x: 45,
                        // rotate: "-180deg",
                        scale : 0.8,
                        borderRadius: "100%"
                    }}
                    transition={{
                        delay: 1,
                        type: 'spring',
                        stiffness: 60,
                        duration: 1.5
                    }}
                    initial={{
                        // y : 0,
                        // x: 0,
                        // rotate: "40deg",
                        radius: '10%',
                        scale : 0.9
                    }}
                    className={"circle"}>

                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </motion.div>

                <div className={"typo"}>
                    <Typography style={{
                        fontWeight : 800,
                        fontSize : '26px'
                    }}>
                        حسابا
                    </Typography>
                    <Typography color={"#ccc"}>
                        فناوری های علوم داده            </Typography>
                    {/*<Button*/}
                    {/*    variant="outlined"*/}
                    {/*    color="secondary"*/}
                    {/*    // className={classes.button}*/}
                    {/*>*/}
                    {/*    بزن بریم*/}
                    {/*    /!*<IoIosArrowBack />*!/*/}
                    {/*</Button>*/}
                </div>
            </Main>

        </Container>
    );
}
