import {CardContainer} from "./style";
import VanillaTilt from 'vanilla-tilt';
import {useEffect, useRef} from "react";
import Image from 'next/image'
import {Typography} from "@mui/material";

export default function VanillaCustomerCard({src, title, description}) {
    function Tilt(props) {
        const {options, ...rest} = props;
        const tilt = useRef(null);

        useEffect(() => {
            VanillaTilt.init(tilt.current, options);
        }, [options]);

        return <div ref={tilt} {...rest}>{props.children}</div>;
    }

    const options = {
        scale: 1.2,
        speed: 1000,
        max: 30
    };
    return (
        <CardContainer>
            <Tilt className={"boxter"} options={options}>
                <div className={"img-container"}>
                    <Image src={src}/>

                </div>
                <Typography textAlign={"center"} height={'30px'} width={"100%"} fontWeight={"bolder"} color={"#fff"} fontSize={"16px"} fontFamily={"iran-sans"}>{title}</Typography>
                {/*<Typography textAlign={"center"} height={'30px'} width={"100%"} fontWeight={"300"} color={"#868686"} fontSize={"13px"} fontFamily={"iran-sans"}>{description}</Typography>*/}
            </Tilt>
        </CardContainer>
    )
}