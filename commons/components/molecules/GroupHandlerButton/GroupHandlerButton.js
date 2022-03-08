import {Container, Item} from "./style";
import {BsChevronDown, BsChevronUp} from 'react-icons/bs'
import {VscFoldDown} from 'react-icons/vsc';
import {useContext} from "react";
import {MainContextStore} from "../../../services/contexts/MainContext";
import {SLICE_ACTIVE} from "../../../constant/types";
import _ from 'lodash'

export default function GroupHandlerButton() {
    const {state, dispatch} = useContext(MainContextStore)


    function handleActiveComponent(type) {

        switch (type) {
            case 'first' :
                dispatch({
                    type: SLICE_ACTIVE,
                    payload: 0
                })
                return;
            case 'next':
                dispatch({
                    type: SLICE_ACTIVE,
                    payload: parseInt(state.pageActive) + 1
                })
                return;
            case 'prev':
                dispatch({
                    type: SLICE_ACTIVE,
                    payload: parseInt(state.pageActive) - 1
                })
                return;
            default :
                return;
        }
    }

    return (
        <Container>
            <Item onClick={() => handleActiveComponent('next')}>
                <BsChevronDown />
            </Item>
            {state.pageActive !== 0 && state.pageActive !== 1 ? (
                <Item onClick={() => handleActiveComponent('first')}>
                    <VscFoldDown style={{transform: 'rotate(180deg)'}} />
                </Item>
            ) : null}
            {state.pageActive !== 0 && (
                <Item onClick={() => handleActiveComponent('prev')}>
                    <BsChevronUp />
                </Item>
            )}
        </Container>
    )
}