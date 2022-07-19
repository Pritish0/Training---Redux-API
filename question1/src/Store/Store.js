import { useReducer } from "react";
import { AppContext } from "./Context";
import {initialState,reducer} from './Reducer';

export const ContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
    <AppContext.Provider value={[state, dispatch]}>
        {props.children}
    </AppContext.Provider>
    );
};