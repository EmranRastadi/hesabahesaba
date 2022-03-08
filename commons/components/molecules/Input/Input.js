import {Container, Icon} from "./style";
import Image from 'next/image'
import {useState} from "react";
import {useInView} from "react-intersection-observer";
import {makeStyles} from "@mui/styles";

export default function Input({
                                  icon,
                                  placeholder,
                                  value,
                                  name,
                                  onChange
                              }, props) {
    const useStyle = makeStyles({
        active : {
            opacity: 1,
            transform: 'scale(1)',
            transition: '1s'
        },
        noActive : {
            opacity: 0,
            transform: 'scale(0.6)',
            transition: '1s'
        }
    })
    const classes = useStyle()
    const [active, setActive] = useState(false)
    const {ref, inView} = useInView()
    return (
        <Container
            className={inView ? classes.active : classes.noActive}
            ref={ref}
            style={{columnGap: (active || value) ? "10px" : "0"}}
            id={(active || value) && 'active'}>
            <Icon className={(active || value) && 'active'}>
                <Image src={icon}/>
            </Icon>
            <input placeholder={placeholder} onFocus={() => setActive(true)}
                   onChange={e => onChange(e)}
                   name={name}
                   onBlur={() => setActive(false)} {...props}/>
        </Container>
    )
}