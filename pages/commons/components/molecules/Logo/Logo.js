import {
    Container,
    Circle,
    Square
} from './style'
import {Typography} from "@mui/material";
import {ThemeProvider} from "styled-components";

export default function Logo({
                                 scale,
                                 float
                             }) {
    const theme = {
        Logo: {
            scale: scale ?? .75,
            float: float ?? 'right'
        }
    }
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Circle/>
                <Square/>
                <Typography fontFamily={"iran-sans"}
                            position={"absolute"}
                            right={0}
                            width={"50px"}
                            fontSize={"21px"}
                            color={"#fff"}
                            fontWeight={800}
                            top={"16px"}
                >
                    حسابا
                </Typography>
            </Container>
        </ThemeProvider>

    )
}