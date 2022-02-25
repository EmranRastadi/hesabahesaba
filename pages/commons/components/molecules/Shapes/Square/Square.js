import {motion} from "framer-motion";
import Image from "next/image";
import square from "../../../../assets/square.png";
import {ThemeProvider} from "styled-components";
import {Main} from "./style";


export default function Square({
                                   left,
                                   width,
                                   height,
                                   delay
                               }) {
    const theme = {
        motionGraphy: {
            square: {
                left,
                width,
                height,
                delay
            }
        }
    }
    return (
        <ThemeProvider theme={theme}>
            <Main>
                <div className={"motion-graphy-square"}>
                    <motion.div
                        animate={{
                            rotate: [30, 90, -90, 360],
                        }}

                        transition={{
                            type: 'spring',
                            duration: 10,
                            repeat: Infinity
                        }}
                    >
                        <Image
                            width={100} height={100} src={square}
                        />

                    </motion.div>
                </div>
            </Main>

        </ThemeProvider>

    )
}
