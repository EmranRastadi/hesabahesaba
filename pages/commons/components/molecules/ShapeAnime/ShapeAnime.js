import {motion} from "framer-motion";
import sqaure from '../../../assets/square.png'
import Image from "next/image";

export default function ShapeAnime({
                                       leftInitial,
                                       duration,
                                       delay,
                                       width,
                                       src,
                                       height,
                                       shapeW,
                                       shapeH
                                   }) {
    return (
        <motion.div
            style={{
                width: shapeW,
                height: shapeH,
                opacity: 0.5
            }}
            animate={{
                y: [-100, height + 100],
                // animationDelay: delay,
                // transitionDelay: delay,
                // rotate: [Math.random() * (360 - 1), Math.random() * (360 - 1), Math.random() * (360 - 1)],
                x: width - (Math.random() * (width - 0.7)).toFixed(2)
            }}

            transition={{
                type: 'spring',
                stiffness: 60,
                duration: 20,
                delayChildren : 5,
                // delay: delay,
                repeat: Infinity
            }}

            initial={{
                x: width - (Math.random() * (width - 0.7)).toFixed(2)
            }}
        >
            <Image width={shapeW} height={shapeH} src={src}/>
        </motion.div>
    )
}