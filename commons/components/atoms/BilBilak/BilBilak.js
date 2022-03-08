import { MdKeyboardArrowDown } from 'react-icons/md';
import { Container } from './style';
import {motion} from 'framer-motion';

export default function BilBilak(props) {
  return (
    <Container {...props}>
      <motion.div
        animate={{
          y : [0 , -10 , 0],
        }}
        transition={{
          repeat : Infinity,
          // repeatDelay : 0.2,
        }}
        className={"container"}>
        <MdKeyboardArrowDown/>
      </motion.div>
    </Container>
  );
}