import {useCallback, useState} from "react";

const HandleChange = () => {
    const [input, setInput] = useState()
    const onChange = useCallback(({target: {name, value}}) => {
        setInput(state => ({
            ...state,
            [name]: value
        }))
    }, [])
    return {onChange, input}
}

export {
    HandleChange
}