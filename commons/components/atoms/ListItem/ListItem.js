import {Container} from "./style";

export default function ListItem(props) {
    return (
        <Container>
            {props.children}
            <div className={"after"}></div>
        </Container>
    )
}