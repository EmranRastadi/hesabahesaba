
import {Container} from './style';
import {useContext} from "react";
import {MainContextStore} from "../../../services/contexts/MainContext";

export default function ShapeAnim() {
    const {state, dispatch} = useContext(MainContextStore)

    return (
        <Container>

        </Container>
    );
}
