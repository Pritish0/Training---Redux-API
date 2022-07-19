import React,{useContext} from "react";
import { AppContext } from "./Store/Context";

export default function Counter(){

    const [ state, dispatch] = useContext(AppContext);

    return(
        <div>
            <h1>{state.counter}</h1>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
            <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
        </div>
    );
}