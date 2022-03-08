import {Main} from "./style";
import {motion} from "framer-motion";

export default function LogoMotion(){
    return (
        <Main>
            <motion.div
                className={"logoCircle"}
                // animate={{
                //     y: ['80%', '20%', '-10%', '35%', '50%'],
                //     x: ['30%', '15%', '0%', '80%', '64%'],
                //
                // }}
                //
                // transition={{
                //     type: 'spring',
                //     duration: 30
                // }}

                // initial={{
                //     x: ['30%', '15%', '0%', '80%', '64%'],
                //     y: ['80%', '20%', '-10%', '35%', '50%']
                // }}
            />
            <motion.div
                className={"logoSquare"}
                // animate={{
                //     y: ['80%', '20%', '-10%', '35%', '50%'],
                //     x: ['30%', '15%', '0%', '80%', '64%'],
                //
                // }}
                //
                // transition={{
                //     type: 'spring',
                //     duration: 30
                // }}

                // initial={{
                //     x: ['30%', '15%', '0%', '80%', '64%'],
                //     y: ['80%', '20%', '-10%', '35%', '50%']
                // }}
            />
        </Main>
    )
}