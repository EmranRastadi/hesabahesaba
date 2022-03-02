import {
    Circle, Container, Luncher, Square, MenuItem
} from "./style";
import {useState, useRef, useEffect} from "react";
import gsap from 'gsap'
import {motion} from 'framer-motion'

export default function Menu() {
    const el = useRef();
    const q = gsap.utils.selector(el);
    const [reversed, setReversed] = useState(true);

    const tl = useRef();
    useEffect(() => {
        tl.current = gsap.timeline()
            .to(q(".SolutionsMenu"), {
                x: 100
            })
            .to(q(".Industry"), {
                x: 45,
                y: -95
            }).to(q(".Customers"), {
                rotate: 360
            })
            .to(q(".ContactUs"), {
                x: 100
            });

    }, []);

    useEffect(() => {
        // toggle the direction of our timeline
        tl.current.reversed(reversed);
    }, [reversed]);
    return (
        <Container>
            <Luncher onClick={() => setReversed(!reversed)}>
                <Circle className={reversed ? "active" : ''}/>
                <Square className={reversed ? "active" : ''}/>
            </Luncher>
            <motion.div
                animate={{
                    x : reversed ? 60  : -85,
                    y : reversed ? 0 : -20
                }}
                transition={{
                    default : {
                        delay : 0
                    }
                }}
                className={"menu-item SolutionsMenu"}></motion.div>
            <motion.div
                animate={{
                    x :reversed ? 35 : -85,
                    y : reversed ? -80 : -20
                }}
                transition={{
                    delay : 0.2,
                    default : {
                        delay : 0.2
                    }
                }}
                className={"menu-item Industry"}></motion.div>
            <motion.div
                animate={{
                    x : reversed ? -30 : -85,
                    y : reversed ? -140 : -20
                }}
                transition={{
                    delay : 0.3,
                    delayChildren : 0.3,
                    default : {
                        delay : 0.3
                    }
                }}
                className={"menu-item Customers"}></motion.div>
            <motion.div
                animate={{
                    x : reversed ? -115 : -85,
                    y : reversed ? -155 : -20
                }}
                transition={{
                    delay : 0.4,
                    delayChildren : 0.4,

                    default : {
                        delay : 0.4
                    }
                }}
                className={"menu-item ContactUs"}></motion.div>
        </Container>
    )
}