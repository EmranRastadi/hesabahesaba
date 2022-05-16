import {
    Abr,
    TowCar,
    Separ,
    Ghalb,
    Ambulanse,
    GhalbBadBadak,
    KeshtiAval, Toorbin, SecondToorbin,RahnamaGloup
} from '../../molecules';
import {Container} from './style';
import {useContext} from "react";
import {MainContextStore} from "../../../services/contexts/MainContext";

export default function ShapeAnim() {
    const {state, dispatch} = useContext(MainContextStore)

    return (
        <Container>
            <Abr/>
            <TowCar/>
            <Separ/>
            <Ghalb/>
            <Ambulanse/>
            <GhalbBadBadak/>
            <KeshtiAval/>
            <Toorbin/>
            <SecondToorbin/>
            <RahnamaGloup/>
        </Container>
    );
}
