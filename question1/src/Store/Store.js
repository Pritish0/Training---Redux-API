import { useReducer } from "react";
import { AppContext } from "./Context";
import {initialState,reducer} from './Reducer';

export const ContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleIncrement = () => {
        dispatch({type: 'INCREMENT'});
    }

    const handleDecrement = () => {
        dispatch({type: 'DECREMENT'});
    }

    const handleReset = () => {
        dispatch({type: 'RESET'});
    }

    return (
    <AppContext.Provider value={[state, handleIncrement,handleDecrement,handleReset]}>
        {props.children}
    </AppContext.Provider>
    );
};
